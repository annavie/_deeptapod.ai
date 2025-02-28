#include <node.h>
#include <string>
#include <cctype>

namespace capitalizeAddon {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;

std::string capitalizeFirstLetter(const std::string& input) {
    std::string result = input;
    bool capitalize = true;

    for (size_t i = 0; i < result.length(); ++i) {
        if (isspace(result[i]) || ispunct(result[i])) {
            capitalize = true;  
        } else if (capitalize && isalpha(result[i])) {
            result[i] = toupper(result[i]);
            capitalize = false; 
        } else {
            result[i] = tolower(result[i]);
        }
    }

    return result;
}

void CapitalizeFirstLetter(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "String argument expected", NewStringType::kNormal).ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value input(isolate, args[0]);
    std::string result = capitalizeFirstLetter(*input);
    
    Local<String> capitalizedString = String::NewFromUtf8(isolate, result.c_str(), NewStringType::kNormal).ToLocalChecked();
    args.GetReturnValue().Set(capitalizedString);
}

void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "capitalizeFirstLetter", CapitalizeFirstLetter);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} 
