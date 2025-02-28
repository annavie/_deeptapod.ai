#include <node.h>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>

void RemoveBlanksWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
        return;
    }

    std::string text(*v8::String::Utf8Value(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked()));

    std::istringstream iss(text);
    std::vector<std::string> lines;
    std::string line;

    while (std::getline(iss, line)) {
        line.erase(std::remove_if(line.begin(), line.end(), ::isspace), line.end());

        if (!line.empty()) {
            lines.push_back(line);
        }
    }

    v8::Local<v8::Array> resultArray = v8::Array::New(isolate, lines.size());
    for (size_t i = 0; i < lines.size(); ++i) {
        resultArray->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, lines[i].c_str()).ToLocalChecked());
    }

    args.GetReturnValue().Set(resultArray);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "removeBlanks", RemoveBlanksWrapper);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
