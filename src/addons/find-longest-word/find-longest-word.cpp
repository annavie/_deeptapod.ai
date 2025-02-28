#include <node.h>
#include <string>
#include <vector>

bool isSymbolOrDigit(char c) {
    return !isalpha(c);
}

std::vector<std::string> findLongestWords(const std::string& text) {
    std::vector<std::string> longestWords;
    size_t maxLength = 0;
    size_t start = 0;
    size_t length = 0;

    for (size_t i = 0; i <= text.size(); ++i) {
        if (i == text.size() || isSymbolOrDigit(text[i])) {
            length = i - start;
            if (length == maxLength && length > 0) {
                longestWords.push_back(text.substr(start, length));
            } else if (length > maxLength && length > 0) {
                maxLength = length;
                longestWords.clear();
                longestWords.push_back(text.substr(start, length));
            }
            start = i + 1;
        } else if (isalpha(text[i])) {
            if (length == 0) {
                start = i;
            }
            length++;
        }
    }

    return longestWords;
}

void FindLongestWords(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();
    v8::Local<v8::Context> context = isolate->GetCurrentContext();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    std::string text = *v8::String::Utf8Value(isolate, args[0]->ToString(context).ToLocalChecked());
    std::vector<std::string> longestWords = findLongestWords(text);

    v8::Local<v8::Array> result = v8::Array::New(isolate, longestWords.size());
    for (size_t i = 0; i < longestWords.size(); ++i) {
        result->Set(context, i, v8::String::NewFromUtf8(isolate, longestWords[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "findLongestWords", FindLongestWords);
}

NODE_MODULE(addon, Initialize)
