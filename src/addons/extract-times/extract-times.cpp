#include <node.h>
#include <iostream>
#include <regex>
#include <string>
#include <vector>

std::string CleanTime(const std::string& time) {
    std::regex extraSignsRegex(R"([^A-Za-z0-9]+$)");
    return std::regex_replace(time, extraSignsRegex, "");
}

std::vector<std::string> ExtractTimes(const std::string& text) {
    std::vector<std::string> times;
    std::regex timeRegex(R"(\b\d{1,2}[:;][0-5]\d\s?(?:AM|PM)\b)", std::regex_constants::icase);
    std::sregex_iterator iter(text.begin(), text.end(), timeRegex);
    std::sregex_iterator end;

    while (iter != end) {
        std::string matchedTime = iter->str();
        times.push_back(CleanTime(matchedTime));
        ++iter;
    }

    return times;
}

void ExtractTimes(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value input_text(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text = *input_text;

    std::vector<std::string> extractedTimes = ExtractTimes(text);

    v8::Local<v8::Array> arr = v8::Array::New(isolate, extractedTimes.size());
    for (size_t i = 0; i < extractedTimes.size(); ++i) {
        arr->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, extractedTimes[i].c_str()).ToLocalChecked()).Check();
    }

    args.GetReturnValue().Set(arr);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractTimes", ExtractTimes);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
