#include <node.h>
#include <iostream>
#include <regex>
#include <set>
#include <string>

using namespace v8;

std::set<std::string> extractUniqueLowercaseWords(const std::string& text) {
    std::regex wordRegex("\\b[a-z]\\w*\\b");
    std::set<std::string> uniqueLowercaseWords;
    auto words_begin = std::sregex_iterator(text.begin(), text.end(), wordRegex);
    auto words_end = std::sregex_iterator();
    for (std::sregex_iterator i = words_begin; i != words_end; ++i) {
        std::smatch match = *i;
        uniqueLowercaseWords.insert(match.str());
    }
    return uniqueLowercaseWords;
}

void ExtractUniqueLowercaseWords(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    String::Utf8Value utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text = *utf8Value;

    std::set<std::string> uniqueLowercaseWords = extractUniqueLowercaseWords(text);
    Local<Array> result = Array::New(isolate, uniqueLowercaseWords.size());

    int index = 0;
    for (const auto& word : uniqueLowercaseWords) {
        result->Set(isolate->GetCurrentContext(), index++, String::NewFromUtf8(isolate, word.c_str()).ToLocalChecked()).FromJust();
    }

    args.GetReturnValue().Set(result);
}

void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "extractUniqueLowercaseWords", ExtractUniqueLowercaseWords);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
