#include <node.h>
#include <string>
#include <sstream>
#include <limits> // Add this include directive

namespace FindShortestWordAddon {

// Function to find the shortest word in a given text
std::string findShortestWord(const std::string& text) {
    std::istringstream iss(text);
    std::string word;
    std::string shortestWord;

    // Initialize shortestWord with a large value
    size_t shortestLength = std::numeric_limits<size_t>::max();

    while (iss >> word) {
        // Calculate the length of the current word
        size_t length = word.length();
        // Update shortestWord if the current word is shorter
        if (length < shortestLength) {
            shortestLength = length;
            shortestWord = word;
        }
    }

    return shortestWord;
}

// Function to be exposed to Node.js
void FindShortestWord(const v8::FunctionCallbackInfo<v8::Value>& args) {
    v8::Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(v8::Exception::TypeError(
            v8::String::NewFromUtf8(isolate, "String argument expected").ToLocalChecked()));
        return;
    }

    v8::String::Utf8Value text(isolate, args[0]);
    std::string inputStr(*text);
    std::string shortestWord = findShortestWord(inputStr);

    args.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, shortestWord.c_str()).ToLocalChecked());
}

// Initialize the addon
void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "findShortestWord", FindShortestWord);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace FindShortestWordAddon
