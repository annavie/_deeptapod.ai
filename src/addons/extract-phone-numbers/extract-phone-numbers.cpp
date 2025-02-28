#include <node.h>
#include <iostream>
#include <regex>
#include <string>
#include <vector>

namespace {

    void ExtractPhoneNumbers(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
    isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
    return;
}

    v8::String::Utf8Value text(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());


    std::string strText = *text;
    std::regex phoneRegex(R"(\b(?:[\+]?[(]?\d{1,3}[)]?[-\s\.]?)?(?:\d{3}[-\s\.]?)?\d{3}[-\s\.]?\d{4}(?:\d{2})?\b)");
    std::vector<std::string> phoneNumbers;
    
    auto words_begin = std::sregex_iterator(strText.begin(), strText.end(), phoneRegex);
    auto words_end = std::sregex_iterator();
    for (std::sregex_iterator i = words_begin; i != words_end; ++i) {
        std::smatch match = *i;
        phoneNumbers.push_back(match.str());
    }

    v8::Local<v8::Array> result = v8::Array::New(isolate, phoneNumbers.size());
    for (size_t i = 0; i < phoneNumbers.size(); ++i) {
        result->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, phoneNumbers[i].c_str()).ToLocalChecked()).FromJust();
    }

    args.GetReturnValue().Set(result);
}


    void Initialize(v8::Local<v8::Object> exports) {
        NODE_SET_METHOD(exports, "extractPhoneNumbers", ExtractPhoneNumbers);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace
