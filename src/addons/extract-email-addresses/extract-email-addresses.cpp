#include <node.h>
#include <vector>
#include <regex>

std::vector<std::string> extract_emails(const std::string& text) {
    std::vector<std::string> emails;
    std::regex email_pattern(R"(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)");

    auto it = std::sregex_iterator(text.begin(), text.end(), email_pattern);
    const auto end = std::sregex_iterator();

    while (it != end) {
        emails.push_back(it->str());
        ++it;
    }

    return emails;
}

void ExtractEmails(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(v8::String::NewFromUtf8(isolate, "String expected").ToLocalChecked()));
        return;
    }

    std::string text = *v8::String::Utf8Value(isolate, args[0]);

    std::vector<std::string> extracted_emails = extract_emails(text);
    v8::Local<v8::Array> result = v8::Array::New(isolate, extracted_emails.size());

   for (size_t i = 0; i < extracted_emails.size(); ++i) {
    result->Set(isolate->GetCurrentContext(), static_cast<uint32_t>(i), v8::String::NewFromUtf8(isolate, extracted_emails[i].c_str()).ToLocalChecked());
}




    args.GetReturnValue().Set(result);
}

void Init(v8::Local<v8::Object> exports, v8::Local<v8::Object> module) {
    NODE_SET_METHOD(exports, "extractEmails", ExtractEmails);
}

NODE_MODULE(extractEmails, Init)
