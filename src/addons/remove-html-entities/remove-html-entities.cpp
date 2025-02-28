#include <node.h>
#include <string>
#include <regex>

void RemoveHtmlEntitiesWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    std::string text(*v8::String::Utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));

    std::regex htmlEntityRegex("&(?:[a-zA-Z]+|#(?:\\d+|x[0-9a-fA-F]+));");
    std::string result = std::regex_replace(text, htmlEntityRegex, "");

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeHtmlEntities", RemoveHtmlEntitiesWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
