#include <node.h>
#include <string>
#include <unordered_map>
#include <sstream>

std::unordered_map<int, int> WordLengthDistribution(const std::string& text) {
    std::unordered_map<int, int> wordLengths;
    std::istringstream iss(text);
    std::string word;

    while (iss >> word) {
        int length = word.length();
        if (wordLengths.find(length) != wordLengths.end()) {
            wordLengths[length]++;
        } else {
            wordLengths[length] = 1;
        }
    }

    return wordLengths;
}

void WordLengthDistribution(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value input_text(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text = *input_text;

    std::unordered_map<int, int> distribution = WordLengthDistribution(text);

    v8::Local<v8::Object> obj = v8::Object::New(isolate);
    for (const auto& pair : distribution) {
        v8::Local<v8::Number> length = v8::Number::New(isolate, pair.first);
        v8::Local<v8::Number> count = v8::Number::New(isolate, pair.second);
        obj->Set(isolate->GetCurrentContext(), length, count).FromJust();
    }

    args.GetReturnValue().Set(obj);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "wordLengthDistribution", WordLengthDistribution);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
