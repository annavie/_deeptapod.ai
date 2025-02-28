#include <node.h>
#include <iostream>
#include <string>
#include <vector>

void ConvertToUppercase(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::Local<v8::String> inputText = args[0].As<v8::String>();
    v8::String::Utf8Value input(isolate, inputText);
    std::string inputString(*input);

    std::string uppercaseString = inputString;
    for (char& c : uppercaseString) {
        c = std::toupper(c);
    }

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, uppercaseString.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "convertToUppercase", ConvertToUppercase);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
