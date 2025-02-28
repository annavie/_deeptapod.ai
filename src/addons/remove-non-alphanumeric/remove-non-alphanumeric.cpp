#include <node.h>
#include <string>
#include <cctype>

void RemoveNonAlphanumericWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    std::string text(*v8::String::Utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));
    std::string modifiedText;

    for (char c : text) {
        if (std::isalnum(c) || c == ' ') {
            modifiedText.push_back(c);
        }
    }

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, modifiedText.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeNonAlphanumeric", RemoveNonAlphanumericWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
