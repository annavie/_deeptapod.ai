#include <node.h>
#include <vector>
#include <string>
#include <regex>

namespace RomanNumeralExtractor {

std::vector<std::string> extractRomanNumerals(const std::string& input) {
    std::vector<std::string> romanNumerals;

    std::regex romanPattern(R"(\b[IVXLCDM]+\b)");

    auto begin = std::sregex_iterator(input.begin(), input.end(), romanPattern);
    auto end = std::sregex_iterator();
    for (auto it = begin; it != end; ++it) {
        romanNumerals.push_back(it->str());
    }

    return romanNumerals;
}

void ExtractRomanNumerals(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "String argument expected").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value input(isolate, args[0]);
    std::string inputStr(*input);
    std::vector<std::string> romanNumerals = extractRomanNumerals(inputStr);

    v8::Local<v8::Array> result = v8::Array::New(isolate, romanNumerals.size());
    for (size_t i = 0; i < romanNumerals.size(); ++i) {
        result->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, romanNumerals[i].c_str()).ToLocalChecked()).FromJust();
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractRomanNumerals", ExtractRomanNumerals);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace RomanNumeralExtractor
