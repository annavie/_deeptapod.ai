#include <node.h>
#include <string>
#include <regex>

std::string RemoveUrls(const std::string& text) {
    std::regex urlPattern("(https?://)?[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})+(\\.[a-zA-Z]{2,})?/[a-zA-Z0-9]{2,}|((https?://)?[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})+(\\.[a-zA-Z]{2,})?)|(https?://)?[a-zA-Z0-9]{2,}\\.[a-zA-Z0-9]{2,}\\.[a-zA-Z0-9]{2,}(\\.[a-zA-Z0-9]{2,})?");

    std::string textWithoutUrls = std::regex_replace(text, urlPattern, "");

    return textWithoutUrls;
}

void RemoveUrls(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value input_text(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text = *input_text;

    std::string textWithoutUrls = RemoveUrls(text);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, textWithoutUrls.c_str()).ToLocalChecked());
}

void Init(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeUrls", RemoveUrls);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)
