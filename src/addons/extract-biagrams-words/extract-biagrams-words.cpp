#include <node.h>
#include <vector>
#include <sstream>
#include <string>

void ExtractWordBigrams(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }
    v8::String::Utf8Value utf8_value(isolate, args[0].As<v8::String>());
    std::string textStr(*utf8_value);
    std::vector<std::string> bigrams;
    std::istringstream ss(textStr);
    std::string prevWord, currentWord;
    
    ss >> prevWord;
    while (ss >> currentWord) {
        std::string bigram = prevWord + " " + currentWord;
        bigrams.push_back(bigram);
        prevWord = currentWord;
    }
        v8::Local<v8::Array> bigramsArray = v8::Array::New(isolate, bigrams.size());
    for (size_t i = 0; i < bigrams.size(); ++i) {
        bigramsArray->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, bigrams[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(bigramsArray);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractWordBigrams", ExtractWordBigrams);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
