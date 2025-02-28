#include <node.h>
#include <string>
#include <vector>
#include <regex>

void ExtractNumbers(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value utf8(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*utf8);

    std::vector<int> nums;
    std::regex regex("\\d+");
    auto wordsBegin = std::sregex_iterator(text.begin(), text.end(), regex);
    auto wordsEnd = std::sregex_iterator();

    for (auto i = wordsBegin; i != wordsEnd; ++i) {
        nums.push_back(std::stoi(i->str()));
    }

    v8::Local<v8::Array> result = v8::Array::New(isolate, nums.size());
    for (size_t i = 0; i < nums.size(); ++i) {
        result->Set(isolate->GetCurrentContext(), i, v8::Integer::New(isolate, nums[i])).Check();
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractNumbers", ExtractNumbers);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
