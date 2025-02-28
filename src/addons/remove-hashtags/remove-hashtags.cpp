#include <node.h>
#include <string>
#include <sstream>

void RemoveHashtagsWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    std::string text(*v8::String::Utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));

    std::istringstream iss(text);
    std::ostringstream oss;
    std::string word;

    while (iss >> word) {
        if (word.size() > 1 && word[0] == '#' && isalpha(word[1])) {
            continue;
        }
        oss << word << " ";
    }

    std::string result = oss.str();
    if (!result.empty()) {
        result.pop_back();
    }

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeHashtags", RemoveHashtagsWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
