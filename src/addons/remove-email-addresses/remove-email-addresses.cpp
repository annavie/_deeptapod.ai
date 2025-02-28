#include <node.h>
#include <string>
#include <regex>

std::string removeEmailAddresses(const std::string& text) 
{
    std::regex pattern(R"(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)");
    return std::regex_replace(text, pattern, "");
}

void RemoveEmailAddressesWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string inputString(*inputText);

    std::string result = removeEmailAddresses(inputString);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeEmailAddresses", RemoveEmailAddressesWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
