#include <node.h>
#include <string>
#include <regex>

void RemovePhoneNumbers(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value utf8(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*utf8);

    std::regex phoneNumberRegex(R"(\+[1-9][0-9]*(\s?\d{2,3}){3})");
    std::string cleanedText = std::regex_replace(text, phoneNumberRegex, "");

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, cleanedText.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removePhoneNumbers", RemovePhoneNumbers);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
