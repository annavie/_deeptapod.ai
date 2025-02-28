#include <node.h>
#include <v8.h>
#include <string>
#include <map>
#include <vector>
#include <algorithm>

void FindMostCommonWordsFirst(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();
    v8::Local<v8::Context> context = isolate->GetCurrentContext();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value text(isolate, args[0]->ToString(context).ToLocalChecked());
    std::string str(*text);

    std::map<std::string, int> wordCount;
    std::string word;

    for (size_t i = 0; i < str.size(); ++i) {
        if (std::isalnum(str[i])) {
            word += std::tolower(str[i]);
        } else if (!word.empty()) {
            wordCount[word]++;
            word.clear();
        }
    }

    if (!word.empty()) {
        wordCount[word]++;
    }

    v8::Local<v8::Array> result = v8::Array::New(isolate, wordCount.size());
    int i = 0;
    for (const auto& pair : wordCount) {
        v8::Local<v8::Object> obj = v8::Object::New(isolate);
        obj->Set(context,
                 v8::String::NewFromUtf8(isolate, "word").ToLocalChecked(),
                 v8::String::NewFromUtf8(isolate, pair.first.c_str()).ToLocalChecked());
        obj->Set(context,
                 v8::String::NewFromUtf8(isolate, "count").ToLocalChecked(),
                 v8::Integer::New(isolate, pair.second));
        result->Set(context, i, obj);
        i++;
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "findMostCommonWordsFirst", FindMostCommonWordsFirst);
}

NODE_MODULE(extractCommonWord, Initialize)
