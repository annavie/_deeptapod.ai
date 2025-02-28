#include <node.h>
#include <string>
#include <algorithm>

std::string reverseString(const std::string &input)
{
  std::string reversed = input;
  std::reverse(reversed.begin(), reversed.end());
  return reversed;
}

void ReverseStringWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string inputString(*inputText);

    std::string result = reverseString(inputString);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "reverseString", ReverseStringWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
