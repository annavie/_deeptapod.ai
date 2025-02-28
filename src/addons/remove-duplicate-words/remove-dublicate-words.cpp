#include <node.h>
#include <string>
#include <unordered_set>
#include <sstream>
#include <algorithm>

std::string cleanWord(const std::string &word)
{
    std::string cleanedWord;
    cleanedWord.reserve(word.size());
    for (char ch : word)
    {
        if (std::isalnum(ch) || ch == ' ')
        {
            cleanedWord += ch;
        }
    }
    return cleanedWord;
}

std::string removeDuplicates(const std::string &inputString)
{
    std::stringstream ss(inputString);
    std::string word;
    std::unordered_set<std::string> wordSet;
    std::string result;

    while (ss >> word)
    {
        word = cleanWord(word);
        std::string lowercaseWord = word;
        std::transform(lowercaseWord.begin(), lowercaseWord.end(), lowercaseWord.begin(), ::tolower);
        if (wordSet.find(lowercaseWord) == wordSet.end())
        {
            wordSet.insert(lowercaseWord);
            result += word + " ";
        }
    }

    return result;
}

void RemoveDuplicatesWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string inputString(*inputText);

    std::string result = removeDuplicates(inputString);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeDuplicateWords", RemoveDuplicatesWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
