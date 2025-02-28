#include <node.h>
#include <string>
#include <cctype>

namespace RemovePunctuationAddon {

std::string removePunctuation(const std::string& text) {
    std::string result;

    for (char c : text) {
        if (!std::ispunct(static_cast<unsigned char>(c))) {
            result += c;
        }
    }

    return result;
}

void RemovePunctuation(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "String argument expected").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value text(isolate, args[0]);
    std::string inputStr(*text);
    std::string cleanedText = removePunctuation(inputStr);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, cleanedText.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removePunctuation", RemovePunctuation);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace RemovePunctuationAddon
