#include <node.h>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
#include <sstream>

std::string sortString(const std::string& str) {
    std::string sortedStr = str;
    std::sort(sortedStr.begin(), sortedStr.end());
    return sortedStr;
}

std::vector<std::string> extractAnagrams(const std::string& text) {
    std::unordered_map<std::string, std::vector<std::string>> anagramMap;

    std::string word;
    std::istringstream iss(text);
    while (iss >> word) {
        std::string sortedWord = sortString(word);
        anagramMap[sortedWord].push_back(word);
    }

    std::vector<std::string> anagrams;
    for (const auto& pair : anagramMap) {
        if (pair.second.size() > 1) {
            anagrams.insert(anagrams.end(), pair.second.begin(), pair.second.end());
        }
    }

    return anagrams;
}

void ExtractAnagrams(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();
    v8::Local<v8::Context> context = isolate->GetCurrentContext();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(
            v8::Exception::TypeError(
                v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()
            )
        );
        return;
    }

    v8::String::Utf8Value str(isolate, args[0]->ToString(context).ToLocalChecked());
    std::string text = *str;

    std::vector<std::string> anagrams = extractAnagrams(text);

    v8::Local<v8::Array> result = v8::Array::New(isolate, anagrams.size());
    for (size_t i = 0; i < anagrams.size(); ++i) {
        result->Set(context, static_cast<uint32_t>(i), v8::String::NewFromUtf8(isolate, anagrams[i].c_str()).ToLocalChecked()).Check();
    }

    args.GetReturnValue().Set(result);
}

void Init(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractAnagrams", ExtractAnagrams);
}

NODE_MODULE(extractAnargams, Init)
