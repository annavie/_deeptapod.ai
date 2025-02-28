#include <node.h>
#include <string>
#include <regex>
#include <vector>

namespace dateExtractorAddon {

std::vector<std::string> extractDates(const std::string& input) {
    std::vector<std::string> dates;

    std::regex datePattern1(R"((\d{4}-\d{2}-\d{2}))"); // Matches YYYY-MM-DD
    std::regex datePattern2(R"((\d{2}-\d{2}-\d{4}))"); // Matches DD-MM-YYYY
    std::regex datePattern3(R"((\d{2}/\d{2}/\d{4}))"); // Matches MM/DD/YYYY
    std::regex datePattern4(R"((\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?) \d{1,2},? \d{4}))"); // Matches MMM DD YYYY, MMMM DD YYYY, MMM DD, YYYY or MMMM DD, YYYY

    auto searchDates = [&](const std::regex& pattern) {
        auto begin = std::sregex_iterator(input.begin(), input.end(), pattern);
        auto end = std::sregex_iterator();
        for (auto it = begin; it != end; ++it) {
            dates.push_back(it->str());
        }
    };

    searchDates(datePattern1);
    searchDates(datePattern2);
    searchDates(datePattern3);
    searchDates(datePattern4);

    return dates;
}

void ExtractDates(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "String argument expected").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value input(isolate, args[0]);
    std::string inputStr(*input);
    std::vector<std::string> dates = extractDates(inputStr);

    v8::Local<v8::Array> result = v8::Array::New(isolate, dates.size());
    for (size_t i = 0; i < dates.size(); ++i) {
        result->Set(isolate->GetCurrentContext(), i, v8::String::NewFromUtf8(isolate, dates[i].c_str()).ToLocalChecked()).FromJust();
    }

    args.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "extractDates", ExtractDates);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace dateExtractorAddon
