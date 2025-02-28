#include <node.h>
#include <string>
#include <vector>
#include <sstream>

bool IsPalindrome(const std::string& word) {
    int size = word.size();
    for (int i = 0; i < size / 2; ++i) {
        if (word[i] != word[size - 1 - i]) {
            return false;
        }
    }
    return true;
}

void PalindromeWordsWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*inputText);

    std::istringstream iss(text);
    std::string word;
    std::vector<std::string> palindromes;

    while (iss >> word) {
        if (IsPalindrome(word)) {
            palindromes.push_back(word);
        }
    }

    v8::Local<v8::Array> array = v8::Array::New(isolate, static_cast<int>(palindromes.size()));
    for (size_t i = 0; i < palindromes.size(); ++i) {
        array->Set(isolate->GetCurrentContext(), static_cast<uint32_t>(i),
                   v8::String::NewFromUtf8(isolate, palindromes[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(array);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "palindromeWords", PalindromeWordsWrapper);
}

NODE_MODULE(palindromeAddon, Initialize)
