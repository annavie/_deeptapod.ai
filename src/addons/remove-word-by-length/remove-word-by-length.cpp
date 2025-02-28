#include <node.h>
#include <string>
#include <sstream>

void RemoveWordsByLength(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 2 || !args[0]->IsString() || !args[1]->IsNumber()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Two arguments are required: a string and an integer").ToLocalChecked()));
        return;
    }

    std::string text(*v8::String::Utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));
    int lengthToRemove = args[1]->Int32Value(isolate->GetCurrentContext()).ToChecked();

    std::istringstream ss(text);
    std::string word;
    std::string newText;

    while (ss >> word) {
        if (word.length() != lengthToRemove) {
            newText += word + " ";
        }
    }

    if (!newText.empty()) {
        newText.pop_back();
    }

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, newText.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeWordsByLength", RemoveWordsByLength);
}

NODE_MODULE(addon, Initialize)
