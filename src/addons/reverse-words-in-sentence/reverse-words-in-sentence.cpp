#include <node.h>
#include <string>
#include <sstream>
#include <vector>
#include <cctype>

std::vector<std::string> reverseWordsInSentence(std::string sentence)
{
    if (!sentence.empty() && std::ispunct(sentence.back()))
    {
        sentence.pop_back();
    }

    for (size_t i = 0; i < sentence.size(); ++i)
    {
        if (std::ispunct(sentence[i]) && i > 0 && sentence[i - 1] != ' ')
        {
            size_t j = i + 1;
            while (j < sentence.size() && sentence[j] != ' ')
            {
                ++j;
            }
            sentence.erase(i, j - i);
        }
    }

    std::stringstream ss(sentence);
    std::vector<std::string> words;
    std::string word;

    while (ss >> word)
    {
        words.push_back(word);
    }

    for (int i = 0, j = words.size() - 1; i < j; i++, j--)
    {
        std::swap(words[i], words[j]);
    }

    return words;
}

void ReverseWordsInSentenceWrapper(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Isolate* isolate = args.GetIsolate();
    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::Local<v8::Context> context = isolate->GetCurrentContext();
    v8::String::Utf8Value sentence(isolate, args[0]->ToString(context).ToLocalChecked());
    std::vector<std::string> reversedWords = reverseWordsInSentence(std::string(*sentence));

    v8::Local<v8::Array> resultArray = v8::Array::New(isolate, reversedWords.size());
    for (size_t i = 0; i < reversedWords.size(); ++i)
    {
        resultArray->Set(context, i, v8::String::NewFromUtf8(isolate, reversedWords[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(resultArray);
}


void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "reverseWordsInSentence", ReverseWordsInSentenceWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
