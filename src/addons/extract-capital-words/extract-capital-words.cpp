#include <node.h>
#include <vector>
#include <string>
#include <sstream>
#include <cctype>

std::vector<std::string> CapitalLetters(const std::string& text) {
    std::istringstream ss(text);
    std::string word;
    std::vector<std::string> result;
    while (ss >> word) {
        if (std::isupper(word[0])) {
            result.push_back(word);
        }
    }
    return result;
}

void CapitalLettersWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string inputString(*inputText);

    std::vector<std::string> result = CapitalLetters(inputString);
    v8::Local<v8::Array> array = v8::Array::New(isolate, static_cast<int>(result.size()));
    for (size_t i = 0; i < result.size(); ++i) {
        array->Set(isolate->GetCurrentContext(), static_cast<uint32_t>(i), 
                   v8::String::NewFromUtf8(isolate, result[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(array);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "capitalLetters", CapitalLettersWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
