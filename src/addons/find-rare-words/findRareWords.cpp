#include <node.h>
#include <string>
#include <sstream>
#include <unordered_map>
#include <vector>

namespace FindRareWordsAddon {

std::vector<std::string> findRareWords(const std::string& text, int threshold) {
    std::unordered_map<std::string, int> wordFreq;

    std::istringstream iss(text);
    std::string word;
    while (iss >> word) {
        for (char& c : word) {
            c = tolower(c);
        }
        wordFreq[word]++;
    }

    std::vector<std::string> rareWords;
    for (const auto& pair : wordFreq) {
        if (pair.second < threshold) {
            rareWords.push_back(pair.first);
        }
    }

    return rareWords;
}

void FindRareWords(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 2 || !args[0]->IsString() || !args[1]->IsNumber()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Invalid arguments. Expected: (text: string, threshold: number)").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value text(isolate, args[0]);
    std::string inputStr(*text);
    int threshold = args[1]->IntegerValue(isolate->GetCurrentContext()).FromMaybe(0);
    std::vector<std::string> rareWords = findRareWords(inputStr, threshold);

    v8::Local<v8::Array> resultArray = v8::Array::New(isolate, rareWords.size());
    for (size_t i = 0; i < rareWords.size(); ++i) {
        v8::Local<v8::String> word = v8::String::NewFromUtf8(isolate, rareWords[i].c_str()).ToLocalChecked();
        resultArray->Set(isolate->GetCurrentContext(), i, word);
    }

    args.GetReturnValue().Set(resultArray);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "findRareWords", FindRareWords);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace FindRareWordsAddon
