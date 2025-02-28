#include <node.h>
#include <string>

void RemoveSpecificWords(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 2 || !args[0]->IsString() || !args[1]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Two string arguments are required").ToLocalChecked()));
        return;
    }

    std::string text(*v8::String::Utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));
    std::string wordToRemove(*v8::String::Utf8Value(isolate, args[1]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));

    size_t pos = 0;
    while ((pos = text.find(wordToRemove, pos)) != std::string::npos) {
        text.erase(pos, wordToRemove.length());
    }

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, text.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeSpecificWords", RemoveSpecificWords);
}

NODE_MODULE(addon, Initialize)
