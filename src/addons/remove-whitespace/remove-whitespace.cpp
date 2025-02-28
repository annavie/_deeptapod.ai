#include <node.h>
#include <string>

void RemoveWhitespace(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value utf8(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*utf8);

    int writeIndex = 0;
    for (char c : text) {
        if (c != ' ' || (writeIndex > 0 && text[writeIndex - 1] != ' ')) {
            text[writeIndex++] = c;
        }
    }
    text.resize(writeIndex);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, text.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeWhitespace", RemoveWhitespace);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
