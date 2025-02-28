#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <node.h>

void ExtractHashtags(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1)
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Wrong number of arguments").ToLocalChecked()));
        return;
    }

    if (!args[0]->IsString())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]);

    std::istringstream iss(*inputText);
    std::string word;
    std::vector<std::string> result;

    while (iss >> word)
    {
        if (word[0] == '#')
        {
            result.push_back(word);
        }
    }

    v8::Local<v8::Array> hashtagsArray = v8::Array::New(isolate, result.size());
    for (size_t i = 0; i < result.size(); ++i)
    {
        hashtagsArray->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, result[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(hashtagsArray);
}

void Initialize(v8::Local<v8::Object> exports)
{
    NODE_SET_METHOD(exports, "extractHashtags", ExtractHashtags);
}

NODE_MODULE(extractHashtags, Initialize)
