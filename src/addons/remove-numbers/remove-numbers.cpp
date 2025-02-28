#include <node.h>
#include <string>

std::string removeNumbers(const std::string &text)
{
    std::string result;
    for (char ch : text)
    {
        if (!std::isdigit(ch))
        {
            result += ch;
        }
    }
    return result;
}

void RemoveNumbersWrapper(const v8::FunctionCallbackInfo<v8::Value> &args)
{
    v8::Isolate *isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString())
    {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
    std::string text(*inputText);

    std::string result = removeNumbers(text);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, result.c_str()).ToLocalChecked());
}

void Initialize(v8::Local<v8::Object> exports)
{
    NODE_SET_METHOD(exports, "removeNumbers", RemoveNumbersWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
