#include <node.h>
#include <string>
#include <sstream>
#include <vector>

namespace ExtractTrigramsAddon {

    void ExtractTrigrams(const v8::FunctionCallbackInfo<v8::Value>& args) {
        v8::Isolate* isolate = args.GetIsolate();

        if (args.Length() < 1 || !args[0]->IsString()) {
            isolate->ThrowException(v8::Exception::TypeError(
                v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
            return;
        }

        v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
        std::string text(*inputText);

        std::vector<std::string> trigrams;
        std::istringstream iss(text);
        std::string word1, word2, word3;

        iss >> word1 >> word2 >> word3;

        while (iss) {
            trigrams.push_back(word1 + " " + word2 + " " + word3);
            word1 = word2;
            word2 = word3;
            iss >> word3;
        }

        v8::Local<v8::Array> array = v8::Array::New(isolate, trigrams.size());
        for (size_t i = 0; i < trigrams.size(); ++i) {
            array->Set(isolate->GetCurrentContext(), static_cast<uint32_t>(i), v8::String::NewFromUtf8(isolate, trigrams[i].c_str()).ToLocalChecked()).Check();
        }

        args.GetReturnValue().Set(array);
    }

    void Initialize(v8::Local<v8::Object> exports) {
        NODE_SET_METHOD(exports, "extractTrigrams", ExtractTrigrams);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace ExtractTrigramsAddon
