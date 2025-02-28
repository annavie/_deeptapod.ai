#include <node.h>
#include <string>

namespace CharCount {

    int CountOfChars(const std::string &inputString) {
        int count = 0;
        for (char ch : inputString) {
            if (ch != ' ') {
                count++;
            }
        }
        return count;
    }

    void CountOfCharsWrapper(const v8::FunctionCallbackInfo<v8::Value>& args) {
        v8::Isolate* isolate = args.GetIsolate();

        if (args.Length() < 1 || !args[0]->IsString()) {
            isolate->ThrowException(v8::Exception::TypeError(
                v8::String::NewFromUtf8(isolate, "Argument must be a string").ToLocalChecked()));
            return;
        }

        v8::String::Utf8Value inputText(isolate, args[0]->ToString(isolate->GetCurrentContext()).ToLocalChecked());
        std::string inputString(*inputText);
        int result = CountOfChars(inputString);

        args.GetReturnValue().Set(v8::Integer::New(isolate, result));
    }

    void Initialize(v8::Local<v8::Object> exports) {
        NODE_SET_METHOD(exports, "countOfChars", CountOfCharsWrapper);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace CharCount
