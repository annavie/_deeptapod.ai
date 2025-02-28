#include <node.h>
#include <string>
#include <regex>
#include <vector>

void ExtractURLs(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value utf8(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*utf8);

    std::regex url(R"(https?:\/\/\S+)");
    std::vector<std::string> urls;

    auto regexIterator = std::sregex_iterator(text.begin(), text.end(), url);
    auto regexEnd = std::sregex_iterator();

    while (regexIterator != regexEnd) {
        std::smatch match = *regexIterator;
        urls.push_back(match.str());
        ++regexIterator;
    }

    v8::Local<v8::Array> result = v8::Array::New(isolate, urls.size());
    for (size_t i = 0; i < urls.size(); ++i) {
        result->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, urls[i].c_str()).ToLocalChecked()).Check();
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractURLs", ExtractURLs);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
