const functionName = [
    "Capitalize First Letter",
    "Capitalize Text",
    "Count Characters",
    "Count Sentences",
    "Count Word",
    "Extract Anagrams",
    "Extract Bigrams",
    "Extract Capital Words",
    "Extract Common Words",
    "Extract Dates",
    "Extract Email Addresses",
    "Extract Hashtags",
    "Extract Lowercase Words",
    "Extract Numbers",
    "Extract Palindromes",
    "Extract Phone Numbers",
    "Extract Roman Numerals",
    "Extract Times",
    "Extract Trigrams",
    "Extract URLs",
    "Find Longest Word",
    "Find Rare Words",
    "Find Shortest Word",
    "Lowercase Text",
    "Remove Blanks",
    "Remove Duplicate Words",
    "Remove Email Addresses",
    "Remove Emojis",
    "Remove Hashtags",
    "Remove Html Tags",
    "Remove Non Alphanumeric",
    "Remove Numbers",
    "Remove Phone Numbers",
    "Remove Punctuation",
    "Remove Specific Words",
    "Remove URLs",
    "Remove Whitespace",
    "Remove Words By Length",
    "Reverse Text",
    "Reverse Words In Sentence",
    "Uppercase Text",
    "Word Length Distribution"
];
const descriptions = [
    "Capitalize First Letter: Capitalizes the first letter of each word in the text.",
    "Capitalize Text: Converts all characters in the text to uppercase.",
    "Count Characters: Counts the total number of characters in the text.",
    "Count Sentences: Counts the total number of sentences in the text.",
    "Count Word: Counts the total number of words in the text.",
    "Extract Anagrams: Identifies words that can be rearranged to form other words.",
    "Extract Bigrams: Extracts pairs of consecutive words from the text.",
    "Extract Capital Words: Retrieves words that begin with a capital letter.",
    "Extract Dates: Extracts date expressions from the text.",
    "Extract Email Addresses: Identifies and extracts email addresses from the text.",
    "Extract Hashtags: Extracts hashtags, identified by the '#' symbol, from the text.",
    "Extract Lowercase Words: Retrieves words that start with a lowercase letter.",
    "Extract Numbers: Extracts numeric digits and sequences from the text.",
    "Extract Palindromes: Identifies words or phrases that read the same forwards and backwards.",
    "Extract Phone Numbers: Extracts phone numbers from the text using various formats.",
    "Extract Roman Numerals: Identifies and extracts Roman numeral expressions.",
    "Extract Times: Extracts time expressions, such as '10:30 AM', from the text.",
    "Extract Trigrams: Extracts triples of consecutive words from the text.",
    "Extract URLs: Identifies and extracts web addresses (URLs).",
    "Find Common Words: Identifies the most frequently occurring words in the text.",
    "Find Longest Word: Finds the longest word in the text.",
    "Find Rare Words: Identifies the least frequently occurring words in the text.",
    "Find Shortest Word: Finds the shortest word in the text.",
    "Lowercase Text: Converts all characters in the text to lowercase.",
    "Remove Blanks: Removes blank lines and excessive spaces from the text.",
    "Remove Duplicate Words: Eliminates repeated words from the text.",
    "Remove Email Addresses: Deletes all email addresses from the text.",
    "Remove Emojis: Removes any emoji characters from the text.",
    "Remove Hashtags: Deletes hashtags from the text.",
    "Remove Html Tags: Strips HTML tags from the text.",
    "Remove Non Alphanumeric: Removes any characters that are not letters or numbers.",
    "Remove Numbers: Deletes all numeric characters from the text.",
    "Remove Phone Numbers: Erases phone numbers from the text.",
    "Remove Punctuation: Deletes all punctuation marks from the text.",
    "Remove Specific Words: Removes user-defined words or phrases from the text.",
    "Remove URLs: Deletes web addresses (URLs) from the text.",
    "Remove Whitespace: Cleans up all types of whitespace (spaces, tabs, new lines) from the text.",
    "Remove Words By Length: Removes words of a certain length from the text.",
    "Reverse Text: Reverses the order of characters in a text.",
    "Reverse Words In Sentence: Reverses the order of words in a sentence.",
    "Uppercase Text: Converts all characters in the text to uppercase.",
    "Word Length Distribution: Calculates the distribution of word lengths in the text."
];

const code = [
    [`1. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json capitalizeFirstLetter(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-capital-words";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world This Is A Test";
    
        nlohmann::json result = capitalizeFirstLetter(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `, `1. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONArray;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
            String endpoint = "capitalize-first-letter"; // Updated endpoint name
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "Hello world This Is A Test");
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        JSONArray capitalWords = result.getJSONArray("result");
                        System.out.println("Result:");
                        for (int i = 0; i < capitalWords.length(); i++) {
                            System.out.println(capitalWords.getString(i));
                        }
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    `,
        `1. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace CapitalWordsExtractor
    {
        class Program
        {
            public static async Task<string> CapitalizeFirstLetterAsync(string apiKey, string text)
            {
                string endpoint = "capitalize-first-letter"; // Updated endpoint name
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return responseJson;
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "Hello world This Is A Test";
                
                try
                {
                    string result = await CapitalizeFirstLetterAsync(apiKey, text);
                    Console.WriteLine(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `, `1.import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'extract-capital-words'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "Hello world This Is A Test"
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Result:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `1.import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'extract-capital-words';
     const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
     const data = {
         text: "Hello world This Is A Test"
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
      `],
    [`2.#include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json capitalizeWord(const std::string& api_key, const std::string& text) {
        std::string endpoint = "capitalize-word";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world This Is A Test";
    
        nlohmann::json result = capitalizeWord(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `2. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "capitalize-word";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Hello world This Is A Test");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray capitalWords = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < capitalWords.length(); i++) {
                             System.out.println(capitalWords.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `2. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace CapitalWordsExtractor
     {
         class Program
         {
             public static async Task<string> CapitalizeWordAsync(string apiKey, string text)
             {
                 string endpoint = "capitalize-word";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "Hello world This Is A Test";
                 
                 try
                 {
                     string result = await CapitalizeWordAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     `,
        `2. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'capitalize-word'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "Hello world This Is A Test"
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `2. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'capitalize-word';
     const url = "https://deeptapod.com/api/text/${apiKey}/${endpoint}";
     const data = {
         text: "Hello world This Is A Test"
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    [`3. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json countCharacters(const std::string& api_key, const std::string& text) {
        std::string endpoint = "count-characters";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world This Is A Test";
    
        nlohmann::json result = countCharacters(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `3. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "count-characters";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Hello world This Is A Test");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         System.out.println("Result:");
                         System.out.println(result.get("result"));
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `3. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace CapitalWordsExtractor
     {
         class Program
         {
             public static async Task<string> CountCharactersAsync(string apiKey, string text)
             {
                 string endpoint = "count-characters";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "Hello world This Is A Test";
                 
                 try
                 {
                     string result = await CountCharactersAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     `,
        `3. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'count-characters'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "Hello world This Is A Test"
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `3. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'count-characters';
     const url = "https://deeptapod.com/api/text/${apiKey}/${endpoint}";
     const data = {
         text: "Hello world This Is A Test"
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    [`4. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json countCharacters(const std::string& api_key, const std::string& text) {
        std::string endpoint = "count-characters";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world This Is A Test";
    
        nlohmann::json result = countCharacters(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `4.import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "count-sentences";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Hello world. This is a test.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         System.out.println("Result:");
                         System.out.println(result.get("result"));
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }`,
        `4. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace SentenceCounter
      {
          class Program
          {
              public static async Task<string> CountSentencesAsync(string apiKey, string text)
              {
                  string endpoint = "count-sentences";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return responseJson;
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "Hello world. This is a test.";
                  
                  try
                  {
                      string result = await CountSentencesAsync(apiKey, text);
                      Console.WriteLine(result);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }`,
        `4. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'count-sentences'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "Hello world. This is a test."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Result:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `4. import fetch from 'node-fetch';

      const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
      const endpoint = 'count-sentences';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "Hello world. This is a test."
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Result:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `],
    [`5. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json countWords(const std::string& api_key, const std::string& text) {
        std::string endpoint = "count-words";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world. This is a test.";
    
        nlohmann::json result = countWords(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `5. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "count-words";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Hello world. This is a test.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         System.out.println("Result:");
                         System.out.println(result.get("result"));
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `5. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace WordCounter
     {
         class Program
         {
             public static async Task<string> CountWordsAsync(string apiKey, string text)
             {
                 string endpoint = "count-words";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "Hello world. This is a test.";
                 
                 try
                 {
                     string result = await CountWordsAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     `,
        `5. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'count-words'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "Hello world. This is a test."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `5. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'count-words';
     const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
     const data = {
         text: "Hello world. This is a test."
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    [`6. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json extractAnagrams(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-anagrams";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world. This is a test.";
    
        nlohmann::json result = extractAnagrams(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `6. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-anagrams";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Hello world. This is a test.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         System.out.println("Result:");
                         System.out.println(result.get("result"));
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `6. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace AnagramExtractor
     {
         class Program
         {
             public static async Task<string> ExtractAnagramsAsync(string apiKey, string text)
             {
                 string endpoint = "extract-anagrams";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "Hello world. This is a test.";
                 
                 try
                 {
                     string result = await ExtractAnagramsAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     `,
        `6. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'extract-anagrams'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "Hello world. This is a test."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `6. import fetch from 'node-fetch';

    const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
    const endpoint = 'extract-anagrams';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "Hello world. This is a test."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Result:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`7.#include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json extractBiagramWords(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-biagram-words";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world. This is a test.";
    
        nlohmann::json result = extractBiagramWords(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `7. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONArray;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
            String endpoint = "extract-biagram-words";
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "Hello world. This is a test.");
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        System.out.println("Result:");
                        System.out.println(result.get("result"));
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    `,
        `7. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace BiagramWordsExtractor
    {
        class Program
        {
            public static async Task<string> ExtractBiagramWordsAsync(string apiKey, string text)
            {
                string endpoint = "extract-biagram-words";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return responseJson;
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "Hello world. This is a test.";
                
                try
                {
                    string result = await ExtractBiagramWordsAsync(apiKey, text);
                    Console.WriteLine(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `,
        `7. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'extract-biagram-words'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "Hello world. This is a test."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Result:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `7. import fetch from 'node-fetch';

    const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
    const endpoint = 'extract-biagram-words';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "Hello world. This is a test."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Result:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`8. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json extractCapitalWords(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-capital-words";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world This Is A Test";
    
        nlohmann::json result = extractCapitalWords(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `8. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONArray;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
            String endpoint = "extract-capital-words";
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "Hello world This Is A Test");
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        JSONArray capitalWords = result.getJSONArray("result");
                        System.out.println("Result:");
                        for (int i = 0; i < capitalWords.length(); i++) {
                            System.out.println(capitalWords.getString(i));
                        }
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    `,
        `8. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace CapitalWordsExtractor
     {
         class Program
         {
             public static async Task<string> ExtractCapitalWordsAsync(string apiKey, string text)
             {
                 string endpoint = "extract-capital-words";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "Hello world This Is A Test";
                 
                 try
                 {
                     string result = await ExtractCapitalWordsAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     `,
        `8. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'extract-capital-words'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "Hello world This Is A Test"
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `8. import fetch from 'node-fetch';

    const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
    const endpoint = 'extract-capital-words';
    const url = "https://deeptapod.com/api/text/${apiKey}/${endpoint}";
    const data = {
        text: "Hello world This Is A Test"
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Result:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`9. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json extractCommonWord(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-common-word";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Hello world This Is A Test";
    
        nlohmann::json result = extractCommonWord(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `9. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-common-word";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Hello world This Is A Test");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray commonWords = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < commonWords.length(); i++) {
                             System.out.println(commonWords.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `9. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace CommonWordsExtractor
    {
        class Program
        {
            public static async Task<string> ExtractCommonWordAsync(string apiKey, string text)
            {
                string endpoint = "extract-common-word";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return responseJson;
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "Hello world This Is A Test";
                
                try
                {
                    string result = await ExtractCommonWordAsync(apiKey, text);
                    Console.WriteLine(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `,
        `9. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'extract-common-word'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "Hello world This Is A Test"
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Result:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `9. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'extract-common-word';
     const url = "https://deeptapod.com/api/text/${apiKey}/${endpoint}";
     const data = {
         text: "Hello world This Is A Test"
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    [`10. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    nlohmann::json extractDates(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-dates";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "The event is scheduled for 2024-06-28 and the deadline is 2024-07-01.";
    
        nlohmann::json result = extractDates(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Result: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `10. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-dates";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "The event is scheduled for 2024-06-28 and the deadline is 2024-07-01.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray dates = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < dates.length(); i++) {
                             System.out.println(dates.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `10. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace DatesExtractor
    {
        class Program
        {
            public static async Task<string> ExtractDatesAsync(string apiKey, string text)
            {
                string endpoint = "extract-dates";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return responseJson;
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "The event is scheduled for 2024-06-28 and the deadline is 2024-07-01.";
                
                try
                {
                    string result = await ExtractDatesAsync(apiKey, text);
                    Console.WriteLine(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `,
        `10. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'extract-dates'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "The event is scheduled for 2024-06-28 and the deadline is 2024-07-01."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Result:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `10. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'extract-dates';
     const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
     const data = {
         text: "The event is scheduled for 2024-06-28 and the deadline is 2024-07-01."
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    [`11. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract email addresses
    nlohmann::json extractEmailAddresses(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-emails";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Contact us at support@example.com and sales@example.com for more information.";
    
        nlohmann::json result = extractEmailAddresses(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Email addresses: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `11. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-emails";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Contact us at support@example.com and sales@example.com for more information.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray emails = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < emails.length(); i++) {
                             System.out.println(emails.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `
            `11. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'extract-emails'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "Contact us at support@example.com and sales@example.com for more information."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `11. import fetch from 'node-fetch';

    const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
    const endpoint = 'extract-emails';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "Contact us at support@example.com and sales@example.com for more information."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Result:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`12. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract hashtags
    nlohmann::json extractHashtags(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-hashtags";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Check out our #summer sale and enjoy #discounts on all items!";
    
        nlohmann::json result = extractHashtags(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Hashtags: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `12. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-hashtags";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Check out our #summer sale and enjoy #discounts on all items!");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray hashtags = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < hashtags.length(); i++) {
                             System.out.println(hashtags.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `12.using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace HashtagExtractor
    {
        class Program
        {
            public static async Task<string> ExtractHashtagsAsync(string apiKey, string text)
            {
                string endpoint = "extract-hashtags";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return responseJson;
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "Check out our #summer sale and enjoy #discounts on all items!";
                
                try
                {
                    string result = await ExtractHashtagsAsync(apiKey, text);
                    Console.WriteLine(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `,
        `12. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'extract-hashtags'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "Check out our #summer sale and enjoy #discounts on all items!"
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Result:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `12. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'extract-hashtags';
     const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
     const data = {
         text: "Check out our #summer sale and enjoy #discounts on all items!"
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Result:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    [`13. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract lowercase words
    nlohmann::json extractLowercaseWords(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-lowercase-words";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This is a Sample Text with lowercase and UPPERCASE words.";
    
        nlohmann::json result = extractLowercaseWords(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Lowercase Words: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `13. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-lowercase-words";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This is a Sample Text with lowercase and UPPERCASE words.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray lowercaseWords = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < lowercaseWords.length(); i++) {
                             System.out.println(lowercaseWords.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `13. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace LowercaseWordsExtractor
     {
         class Program
         {
             public static async Task<string> ExtractLowercaseWordsAsync(string apiKey, string text)
             {
                 string endpoint = "extract-lowercase-words";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "This is a Sample Text with lowercase and UPPERCASE words.";
                 
                 try
                 {
                     string result = await ExtractLowercaseWordsAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     `,
        `13. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'extract-lowercase-words'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "This is a Sample Text with lowercase and UPPERCASE words."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `13. import fetch from 'node-fetch';

      const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
      const endpoint = 'extract-lowercase-words';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "This is a Sample Text with lowercase and UPPERCASE words."
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Result:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `],
    [`14. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract numbers
    nlohmann::json extractNumbers(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-numbers";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This text contains numbers like 123, 456, and 789.";
    
        nlohmann::json result = extractNumbers(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Numbers: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `14. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-numbers";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This text contains numbers like 123, 456, and 789.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray numbers = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < numbers.length(); i++) {
                             System.out.println(numbers.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `14.using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace NumbersExtractor
      {
          class Program
          {
              public static async Task<string> ExtractNumbersAsync(string apiKey, string text)
              {
                  string endpoint = "extract-numbers";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return responseJson;
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "This text contains numbers like 123, 456, and 789.";
                  
                  try
                  {
                      string result = await ExtractNumbersAsync(apiKey, text);
                      Console.WriteLine(result);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }
      `,
        `14. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'extract-numbers'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This text contains numbers like 123, 456, and 789."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Result:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `14. import fetch from 'node-fetch';

    const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
    const endpoint = 'extract-numbers';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "This text contains numbers like 123, 456, and 789."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Result:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`15. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract palindromes
    nlohmann::json extractPalindromes(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-palindromes";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "A man, a plan, a canal, Panama";
    
        nlohmann::json result = extractPalindromes(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Palindromes: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `15. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-palindromes";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "A man, a plan, a canal, Panama");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray palindromes = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < palindromes.length(); i++) {
                             System.out.println(palindromes.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `15. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace PalindromesExtractor
      {
          class Program
          {
              public static async Task<string> ExtractPalindromesAsync(string apiKey, string text)
              {
                  string endpoint = "extract-palindromes";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return responseJson;
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "A man, a plan, a canal, Panama";
                  
                  try
                  {
                      string result = await ExtractPalindromesAsync(apiKey, text);
                      Console.WriteLine(result);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }
      `,
        `15. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'extract-palindromes'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "A man, a plan, a canal, Panama"
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Result:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `15. import fetch from 'node-fetch';

        const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
        const endpoint = 'extract-palindromes';
        const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
        const data = {
            text: "A man, a plan, a canal, Panama"
        };
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then(error => Promise.reject(error));
                }
            })
            .then(result => {
                if (result.hasOwnProperty('result')) {
                    console.log("Result:", result.result);
                } else {
                    console.log("The key 'result' is not present in the response.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        `],
    [`16. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract phone numbers
    nlohmann::json extractPhoneNumbers(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-phone-numbers";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Call me at (123) 456-7890 or 987-654-3210.";
    
        nlohmann::json result = extractPhoneNumbers(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Phone Numbers: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `16. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-phone-numbers";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Call me at (123) 456-7890 or 987-654-3210.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray phoneNumbers = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < phoneNumbers.length(); i++) {
                             System.out.println(phoneNumbers.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `16. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace PhoneNumbersExtractor
      {
          class Program
          {
              public static async Task<string> ExtractPhoneNumbersAsync(string apiKey, string text)
              {
                  string endpoint = "extract-phone-numbers";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return responseJson;
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "Call me at (123) 456-7890 or 987-654-3210.";
                  
                  try
                  {
                      string result = await ExtractPhoneNumbersAsync(apiKey, text);
                      Console.WriteLine(result);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }
      `,
        `16. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'extract-phone-numbers'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "Call me at (123) 456-7890 or 987-654-3210."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Result:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `16. import fetch from 'node-fetch';

       const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
       const endpoint = 'extract-phone-numbers';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "Call me at (123) 456-7890 or 987-654-3210."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Result:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`17. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract Roman numerals
    nlohmann::json extractRomanNumerals(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-roman-numerals";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "The Roman numerals IV, IX, and XL are interesting.";
    
        nlohmann::json result = extractRomanNumerals(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Roman Numerals: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `17. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-roman-numerals";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "The Roman numerals IV, IX, and XL are interesting.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray romanNumerals = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < romanNumerals.length(); i++) {
                             System.out.println(romanNumerals.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `17. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace RomanNumeralsExtractor
      {
          class Program
          {
              public static async Task<string> ExtractRomanNumeralsAsync(string apiKey, string text)
              {
                  string endpoint = "extract-roman-numerals";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return responseJson;
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "The Roman numerals IV, IX, and XL are interesting.";
                  
                  try
                  {
                      string result = await ExtractRomanNumeralsAsync(apiKey, text);
                      Console.WriteLine(result);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }
      `,
        `17. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'extract-roman-numerals'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "The Roman numerals IV, IX, and XL are interesting."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Result:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `17. import fetch from 'node-fetch';

       const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
       const endpoint = 'extract-roman-numerals';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "The Roman numerals IV, IX, and XL are interesting."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Result:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`18. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract times
    nlohmann::json extractTimes(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-times";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "The meeting starts at 10:00 AM and ends at 3:00 PM.";
    
        nlohmann::json result = extractTimes(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Times: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `18. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-times";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "The meeting starts at 10:00 AM and ends at 3:00 PM.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray times = result.getJSONArray("result");
                         System.out.println("Result:");
                         for (int i = 0; i < times.length(); i++) {
                             System.out.println(times.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `18. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     namespace TimesExtractor
     {
         class Program
         {
             public static async Task<string> ExtractTimesAsync(string apiKey, string text)
             {
                 string endpoint = "extract-times";
                 string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                 var data = new { text = text };
                 var jsonData = JsonConvert.SerializeObject(data);
                 var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                 
                 using (var client = new HttpClient())
                 {
                     var response = await client.PostAsync(url, content);
                     
                     if (response.IsSuccessStatusCode)
                     {
                         var responseJson = await response.Content.ReadAsStringAsync();
                         return responseJson;
                     }
                     else
                     {
                         var error = await response.Content.ReadAsStringAsync();
                         throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                     }
                 }
             }
     
             static async Task Main(string[] args)
             {
                 string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                 string text = "The meeting starts at 10:00 AM and ends at 3:00 PM.";
                 
                 try
                 {
                     string result = await ExtractTimesAsync(apiKey, text);
                     Console.WriteLine(result);
                 }
                 catch (Exception ex)
                 {
                     Console.WriteLine("Error: " + ex.Message);
                 }
             }
         }
     }
     "`
            `18. import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'extract-times'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "The meeting starts at 10:00 AM and ends at 3:00 PM."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200) {
         result = response.json()
         if 'result' in result:
             print("Result:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     }
     `,
        `18. import fetch from 'node-fetch';

      const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
      const endpoint = 'extract-times';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "The meeting starts at 10:00 AM and ends at 3:00 PM."
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Result:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `],
    [`19. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract trigrams
    nlohmann::json extractTrigrams(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-trigrams";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This is a sample text to extract trigrams.";
    
        nlohmann::json result = extractTrigrams(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Trigrams: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `19. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONArray;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
            String endpoint = "extract-trigrams";
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "This is a sample text to extract trigrams.");
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        JSONArray trigrams = result.getJSONArray("result");
                        System.out.println("Result:");
                        for (int i = 0; i < trigrams.length(); i++) {
                            System.out.println(trigrams.getString(i));
                        }
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    `,
        `19. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace TrigramsExtractor
    {
        class Program
        {
            public static async Task<string> ExtractTrigramsAsync(string apiKey, string text)
            {
                string endpoint = "extract-trigrams";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return responseJson;
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "This is a sample text to extract trigrams.";
                
                try
                {
                    string result = await ExtractTrigramsAsync(apiKey, text);
                    Console.WriteLine(result);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `,
        `19. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'extract-trigrams'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "This is a sample text to extract trigrams."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Result:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `19. import fetch from 'node-fetch';

    const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
    const endpoint = 'extract-trigrams';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "This is a sample text to extract trigrams."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Result:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`20. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to extract URLs
    nlohmann::json extractUrls(const std::string& api_key, const std::string& text) {
        std::string endpoint = "extract-urls";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
        return response_json;
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "Visit us at https://example.com for more information.";
    
        nlohmann::json result = extractUrls(api_key, text);
    
        if (result.contains("result")) {
            std::cout << "Extracted URLs: " << result["result"] << std::endl;
        } else {
            std::cout << "The key 'result' is not present in the response." << std::endl;
        }
        return 0;
    }
    `,
        `20. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONArray;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "extract-urls";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Visit us at https://example.com for more information.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONArray urls = result.getJSONArray("result");
                         System.out.println("Extracted URLs:");
                         for (int i = 0; i < urls.length(); i++) {
                             System.out.println(urls.getString(i));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `20. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace UrlsExtractor
      {
          class Program
          {
              public static async Task<string> ExtractUrlsAsync(string apiKey, string text)
              {
                  string endpoint = "extract-urls";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return responseJson;
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "Visit us at https://example.com for more information.";
                  
                  try
                  {
                      string result = await ExtractUrlsAsync(apiKey, text);
                      Console.WriteLine(result);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }
      `,
        `20. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'extract-urls'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "Visit us at https://example.com for more information."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Extracted URLs:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `20. import fetch from 'node-fetch';

       const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
       const endpoint = 'extract-urls';
       const url ='https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "Visit us at https://example.com for more information."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Extracted URLs:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`21. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to find the longest word
    std::string findLongestWord(const std::string& api_key, const std::string& text) {
        std::string endpoint = "find-longest-word";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to find the longest word.";
        }
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This sentence contains words of different lengths.";
    
        std::string longestWord = findLongestWord(api_key, text);
    
        std::cout << "Longest word: " << longestWord << std::endl;
    
        return 0;
    }
    `,
        `21. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "find-longest-word";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This sentence contains words of different lengths.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String longestWord = result.getString("result");
                         System.out.println("Longest word: " + longestWord);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `21. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace LongestWordFinder
    {
        class Program
        {
            public static async Task<string> FindLongestWordAsync(string apiKey, string text)
            {
                string endpoint = "find-longest-word";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return JsonConvert.DeserializeObject<string>(responseJson);
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "This sentence contains words of different lengths.";
                
                try
                {
                    string longestWord = await FindLongestWordAsync(apiKey, text);
                    Console.WriteLine("Longest word: " + longestWord);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    `,
        `21. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'find-longest-word'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "This sentence contains words of different lengths."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            longest_word = result["result"]
            print("Longest word:", longest_word)
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `21. import fetch from 'node-fetch';

     const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
     const endpoint = 'find-longest-word';
     const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
     const data = {
         text: "This sentence contains words of different lengths."
     };
     
     fetch(url, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     })
         .then(response => {
             if (response.ok) {
                 return response.json();
             } else {
                 return response.json().then(error => Promise.reject(error));
             }
         })
         .then(result => {
             if (result.hasOwnProperty('result')) {
                 console.log("Longest word:", result.result);
             } else {
                 console.log("The key 'result' is not present in the response.");
             }
         })
         .catch(error => {
             console.error("Error:", error);
         });
     `],
    ["22. C++", "22. Java", "22. C#", "22. Python", "22. JS"],

    [`23. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to find the shortest word
    std::string findShortestWord(const std::string& api_key, const std::string& text) {
        std::string endpoint = "find-shortest-word";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to find the shortest word.";
        }
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This sentence contains words of varying lengths.";
    
        std::string shortestWord = findShortestWord(api_key, text);
    
        std::cout << "Shortest word: " << shortestWord << std::endl;
    
        return 0;
    }
    `,
        `23. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "find-shortest-word";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This sentence contains words of varying lengths.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String shortestWord = result.getString("result");
                         System.out.println("Shortest word: " + shortestWord);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `23. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    namespace ShortestWordFinder
    {
        class Program
        {
            public static async Task<string> FindShortestWordAsync(string apiKey, string text)
            {
                string endpoint = "find-shortest-word";
                string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                var data = new { text = text };
                var jsonData = JsonConvert.SerializeObject(data);
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                
                using (var client = new HttpClient())
                {
                    var response = await client.PostAsync(url, content);
                    
                    if (response.IsSuccessStatusCode)
                    {
                        var responseJson = await response.Content.ReadAsStringAsync();
                        return JsonConvert.DeserializeObject<string>(responseJson);
                    }
                    else
                    {
                        var error = await response.Content.ReadAsStringAsync();
                        throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                    }
                }
            }
    
            static async Task Main(string[] args)
            {
                string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                string text = "This sentence contains words of varying lengths.";
                
                try
                {
                    string shortestWord = await FindShortestWordAsync(apiKey, text);
                    Console.WriteLine("Shortest word: " + shortestWord);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
        }
    }
    "`
            `23. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'find-shortest-word'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "This sentence contains words of varying lengths."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            shortest_word = result["result"]
            print("Shortest word:", shortest_word)
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `
            `23. import requests
    import json
    
    api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
    endpoint = 'find-shortest-word'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "This sentence contains words of varying lengths."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            shortest_word = result["result"]
            print("Shortest word:", shortest_word)
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `],
    [`24. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to convert text to lowercase
    std::string convertToLowercase(const std::string& api_key, const std::string& text) {
        std::string endpoint = "lowercase-text";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if(curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to convert text to lowercase.";
        }
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This TEXT should Be CONVERTED to Lowercase.";
    
        std::string lowercaseText = convertToLowercase(api_key, text);
    
        std::cout << "Lowercase text: " << lowercaseText << std::endl;
    
        return 0;
    }`
        ,
        `24. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "lowercase-text";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This TEXT should Be CONVERTED to Lowercase.");
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String lowercaseText = result.getString("result");
                         System.out.println("Lowercase text: " + lowercaseText);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `24. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      namespace LowercaseTextConverter
      {
          class Program
          {
              public static async Task<string> ConvertToLowercaseAsync(string apiKey, string text)
              {
                  string endpoint = "lowercase-text";
                  string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
                  var data = new { text = text };
                  var jsonData = JsonConvert.SerializeObject(data);
                  var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
                  
                  using (var client = new HttpClient())
                  {
                      var response = await client.PostAsync(url, content);
                      
                      if (response.IsSuccessStatusCode)
                      {
                          var responseJson = await response.Content.ReadAsStringAsync();
                          return JsonConvert.DeserializeObject<string>(responseJson);
                      }
                      else
                      {
                          var error = await response.Content.ReadAsStringAsync();
                          throw new Exception($"Request failed with status code {response.StatusCode}: {error}");
                      }
                  }
              }
      
              static async Task Main(string[] args)
              {
                  string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
                  string text = "This TEXT should Be CONVERTED to Lowercase.";
                  
                  try
                  {
                      string lowercaseText = await ConvertToLowercaseAsync(apiKey, text);
                      Console.WriteLine("Lowercase text: " + lowercaseText);
                  }
                  catch (Exception ex)
                  {
                      Console.WriteLine("Error: " + ex.Message);
                  }
              }
          }
      }
      `,
        `24. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'lowercase-text'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This TEXT should Be CONVERTED to Lowercase."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              lowercase_text = result["result"]
              print("Lowercase text:", lowercase_text)
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `24. import fetch from 'node-fetch';

       const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
       const endpoint = 'lowercase-text';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This TEXT should Be CONVERTED to Lowercase."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Lowercase text:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`25. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove blank spaces from text
    std::string removeBlanks(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-blanks";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove blanks from text.";
        }
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This is a text with blanks.";
    
        std::string textWithoutBlanks = removeBlanks(api_key, text);
    
        std::cout << "Text without blanks: " << textWithoutBlanks << std::endl;
    
        return 0;
    }
    `,
        `25. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "remove-blanks";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This is a text with blanks.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutBlanks = result.getString("result");
                         System.out.println("Text without blanks: " + textWithoutBlanks);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `25. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     class Program
     {
         static async Task Main()
         {
             string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             string endpoint = "remove-blanks";
             string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
             var data = new { text = "This is a text with blanks." };
             var jsonData = JsonConvert.SerializeObject(data);
             var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
     
             using (var client = new HttpClient())
             {
                 var response = await client.PostAsync(url, content);
     
                 if (response.IsSuccessStatusCode)
                 {
                     var responseJson = await response.Content.ReadAsStringAsync();
                     dynamic result = JsonConvert.DeserializeObject(responseJson);
     
                     if (result.result != null)
                     {
                         string textWithoutBlanks = result.result;
                         Console.WriteLine("Text without blanks: " + textWithoutBlanks);
                     }
                     else
                     {
                         Console.WriteLine("The key 'result' is not present in the response.");
                     }
                 }
                 else
                 {
                     Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                 }
             }
         }
     }
     `,
        `25.import requests
     import json
     
     api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
     endpoint = 'remove-blanks'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "This is a text with blanks."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Text without blanks:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `25. const fetch = require('node-fetch');

      const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
      const endpoint = 'remove-blanks';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "This is a text with blanks."
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Text without blanks:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `],
    [`26. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove duplicate words from text
    std::string removeDuplicateWords(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-duplicate-words";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove duplicate words from text.";
        }
    }
    
    int main() {
        std::string api_key = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
        std::string text = "This is a text with duplicate words. This is a text with duplicate words.";
    
        std::string textWithoutDuplicates = removeDuplicateWords(api_key, text);
    
        std::cout << "Text without duplicate words: " << textWithoutDuplicates << std::endl;
    
        return 0;
    }`,
        `26. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
             String endpoint = "remove-duplicate-words";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This is a text with duplicate words. This is a text with duplicate words.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutDuplicates = result.getString("result");
                         System.out.println("Text without duplicate words: " + textWithoutDuplicates);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `26. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ";
              string endpoint = "remove-duplicate-words";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This is a text with duplicate words. This is a text with duplicate words." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutDuplicates = result.result;
                          Console.WriteLine("Text without duplicate words: " + textWithoutDuplicates);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `26. import requests
      import json
      
      api_key = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ'
      endpoint = 'remove-duplicate-words'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This is a text with duplicate words. This is a text with duplicate words."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without duplicate words:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `26. const fetch = require('node-fetch');

       const apiKey = 'AQT6oSlQ-1Yq6iSDqJ7jLeeTxqMkxaGcQWoxXXLACFQ';
       const endpoint = 'remove-duplicate-words';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This is a text with duplicate words. This is a text with duplicate words."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Text without duplicate words:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`27. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove email addresses from text
    std::string removeEmailAddresses(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-email-addresses";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove email addresses from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "Send me an email at john.doe@example.com or jane.smith@example.com";
    
        std::string textWithoutEmails = removeEmailAddresses(api_key, text);
    
        std::cout << "Text without email addresses: " << textWithoutEmails << std::endl;
    
        return 0;
    }
    `,
        `27. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-email-addresses";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Send me an email at john.doe@example.com or jane.smith@example.com");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutEmails = result.getString("result");
                         System.out.println("Text without email addresses: " + textWithoutEmails);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `27. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-email-addresses";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "Send me an email at john.doe@example.com or jane.smith@example.com" };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutEmails = result.result;
                          Console.WriteLine("Text without email addresses: " + textWithoutEmails);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `27.import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-email-addresses'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "Send me an email at john.doe@example.com or jane.smith@example.com"
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without email addresses:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `27. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'remove-email-addresses';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "Send me an email at john.doe@example.com or jane.smith@example.com"
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Text without email addresses:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`28. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove emojis from text
    std::string removeEmojis(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-emojis";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove emojis from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "Hello 😊, how are you? 🌟";
    
        std::string textWithoutEmojis = removeEmojis(api_key, text);
    
        std::cout << "Text without emojis: " << textWithoutEmojis << std::endl;
    
        return 0;
    }
    `,
        `28. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "YOUR_API_KEY_HERE";
            String endpoint = "remove-emojis";
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "Hello 😊, how are you? 🌟");
    
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        String textWithoutEmojis = result.getString("result");
                        System.out.println("Text without emojis: " + textWithoutEmojis);
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    `,
        `28.using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    class Program
    {
        static async Task Main()
        {
            string apiKey = "YOUR_API_KEY_HERE";
            string endpoint = "remove-emojis";
            string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
            var data = new { text = "Hello 😊, how are you? 🌟" };
            var jsonData = JsonConvert.SerializeObject(data);
            var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
    
            using (var client = new HttpClient())
            {
                var response = await client.PostAsync(url, content);
    
                if (response.IsSuccessStatusCode)
                {
                    var responseJson = await response.Content.ReadAsStringAsync();
                    dynamic result = JsonConvert.DeserializeObject(responseJson);
    
                    if (result.result != null)
                    {
                        string textWithoutEmojis = result.result;
                        Console.WriteLine("Text without emojis: " + textWithoutEmojis);
                    }
                    else
                    {
                        Console.WriteLine("The key 'result' is not present in the response.");
                    }
                }
                else
                {
                    Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                }
            }
        }
    }
    `,
        `28. import requests
    import json
    
    api_key = 'YOUR_API_KEY_HERE'
    endpoint = 'remove-emojis'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "Hello 😊, how are you? 🌟"
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Text without emojis:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
    `,
        `28. const fetch = require('node-fetch');

    const apiKey = 'YOUR_API_KEY_HERE';
    const endpoint = 'remove-emojis';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "Hello 😊, how are you? 🌟"
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Text without emojis:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`29. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove hashtags from text
    std::string removeHashtags(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-hashtags";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove hashtags from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This is a #sample text with #hashtags.";
    
        std::string textWithoutHashtags = removeHashtags(api_key, text);
    
        std::cout << "Text without hashtags: " << textWithoutHashtags << std::endl;
    
        return 0;
    }
    `,
        `29. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-hashtags";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This is a #sample text with #hashtags.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutHashtags = result.getString("result");
                         System.out.println("Text without hashtags: " + textWithoutHashtags);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `29. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-hashtags";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This is a #sample text with #hashtags." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutHashtags = result.result;
                          Console.WriteLine("Text without hashtags: " + textWithoutHashtags);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `29. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-hashtags'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This is a #sample text with #hashtags."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without hashtags:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `29. const fetch = require('node-fetch');

    const apiKey = 'YOUR_API_KEY_HERE';
    const endpoint = 'remove-hashtags';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "This is a #sample text with #hashtags."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Text without hashtags:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`30. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove HTML entities from text
    std::string removeHtmlEntities(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-html-entities";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove HTML entities from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This is a &lt;sample&gt; text with &amp;entities.";
    
        std::string textWithoutEntities = removeHtmlEntities(api_key, text);
    
        std::cout << "Text without HTML entities: " << textWithoutEntities << std::endl;
    
        return 0;
    }
    `,
        `30. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-html-entities";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This is a &lt;sample&gt; text with &amp;entities.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutEntities = result.getString("result");
                         System.out.println("Text without HTML entities: " + textWithoutEntities);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `30. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     class Program
     {
         static async Task Main()
         {
             string apiKey = "YOUR_API_KEY_HERE";
             string endpoint = "remove-html-entities";
             string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
             var data = new { text = "This is a &lt;sample&gt; text with &amp;entities." };
             var jsonData = JsonConvert.SerializeObject(data);
             var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
     
             using (var client = new HttpClient())
             {
                 var response = await client.PostAsync(url, content);
     
                 if (response.IsSuccessStatusCode)
                 {
                     var responseJson = await response.Content.ReadAsStringAsync();
                     dynamic result = JsonConvert.DeserializeObject(responseJson);
     
                     if (result.result != null)
                     {
                         string textWithoutEntities = result.result;
                         Console.WriteLine("Text without HTML entities: " + textWithoutEntities);
                     }
                     else
                     {
                         Console.WriteLine("The key 'result' is not present in the response.");
                     }
                 }
                 else
                 {
                     Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                 }
             }
         }
     }
     `,
        `30. import requests
     import json
     
     api_key = 'YOUR_API_KEY_HERE'
     endpoint = 'remove-html-entities'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "This is a &lt;sample&gt; text with &amp;entities."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Text without HTML entities:", result["result"])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
        `30. const fetch = require('node-fetch');

      const apiKey = 'YOUR_API_KEY_HERE';
      const endpoint = 'remove-html-entities';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "This is a &lt;sample&gt; text with &amp;entities."
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Text without HTML entities:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `],
    [`31. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove non-alphanumeric characters from text
    std::string removeNonAlphanumeric(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-non-alphanumeric";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove non-alphanumeric characters from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This text contains 123 numbers and special characters!@#";
    
        std::string textWithoutNonAlphanumeric = removeNonAlphanumeric(api_key, text);
    
        std::cout << "Text without non-alphanumeric characters: " << textWithoutNonAlphanumeric << std::endl;
    
        return 0;
    }
    `
        `31. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-non-alphanumeric";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This text contains 123 numbers and special characters!@#");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutNonAlphanumeric = result.getString("result");
                         System.out.println("Text without non-alphanumeric characters: " + textWithoutNonAlphanumeric);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `31. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-non-alphanumeric";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This text contains 123 numbers and special characters!@#" };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutNonAlphanumeric = result.result;
                          Console.WriteLine("Text without non-alphanumeric characters: " + textWithoutNonAlphanumeric);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `31. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-non-alphanumeric'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This text contains 123 numbers and special characters!@#"
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without non-alphanumeric characters:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
    `31. const fetch = require('node-fetch');

    const apiKey = 'YOUR_API_KEY_HERE';
    const endpoint = 'remove-non-alphanumeric';
    const url = 'ttps://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "This text contains 123 numbers and special characters!@#"
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Text without non-alphanumeric characters:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    `],
    [`32. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove numbers from text
    std::string removeNumbers(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-numbers";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove numbers from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This text contains 123 numbers and special characters!@#";
    
        std::string textWithoutNumbers = removeNumbers(api_key, text);
    
        std::cout << "Text without numbers: " << textWithoutNumbers << std::endl;
    
        return 0;
    }
    `,
        `32. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-numbers";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This text contains 123 numbers and special characters!@#");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutNumbers = result.getString("result");
                         System.out.println("Text without numbers: " + textWithoutNumbers);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `32. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-numbers";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This text contains 123 numbers and special characters!@#" };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutNumbers = result.result;
                          Console.WriteLine("Text without numbers: " + textWithoutNumbers);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `32. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-numbers'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This text contains 123 numbers and special characters!@#"
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without numbers:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `32. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'remove-numbers';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This text contains 123 numbers and special characters!@#"
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Text without numbers:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`33. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove phone numbers from text
    std::string removePhoneNumbers(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-phone-numbers";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove phone numbers from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "Contact us at +1234567890 or 555-123-4567 for more information.";
    
        std::string textWithoutPhoneNumbers = removePhoneNumbers(api_key, text);
    
        std::cout << "Text without phone numbers: " << textWithoutPhoneNumbers << std::endl;
    
        return 0;
    }
    `,
        `33.import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-phone-numbers";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Contact us at +1234567890 or 555-123-4567 for more information.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutPhoneNumbers = result.getString("result");
                         System.out.println("Text without phone numbers: " + textWithoutPhoneNumbers);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `33. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-phone-numbers";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "Contact us at +1234567890 or 555-123-4567 for more information." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutPhoneNumbers = result.result;
                          Console.WriteLine("Text without phone numbers: " + textWithoutPhoneNumbers);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `33. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-phone-numbers'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "Contact us at +1234567890 or 555-123-4567 for more information."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without phone numbers:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `33. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'remove-phone-numbers';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "Contact us at +1234567890 or 555-123-4567 for more information."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Text without phone numbers:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
    [`34.#include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove punctuation from text
    std::string removePunctuation(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-punctuation";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove punctuation from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "Hello! How are you? I'm fine, thank you.";
    
        std::string textWithoutPunctuation = removePunctuation(api_key, text);
    
        std::cout << "Text without punctuation: " << textWithoutPunctuation << std::endl;
    
        return 0;
    }
     `,
        `34. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "YOUR_API_KEY_HERE";
            String endpoint = "remove-punctuation";
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "Hello! How are you? I'm fine, thank you.");
    
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        String textWithoutPunctuation = result.getString("result");
                        System.out.println("Text without punctuation: " + textWithoutPunctuation);
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
     `,
        `34. using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;
    using Newtonsoft.Json;
    
    class Program
    {
        static async Task Main()
        {
            string apiKey = "YOUR_API_KEY_HERE";
            string endpoint = "remove-punctuation";
            string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
            var data = new { text = "Hello! How are you? I'm fine, thank you." };
            var jsonData = JsonConvert.SerializeObject(data);
            var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
    
            using (var client = new HttpClient())
            {
                var response = await client.PostAsync(url, content);
    
                if (response.IsSuccessStatusCode)
                {
                    var responseJson = await response.Content.ReadAsStringAsync();
                    dynamic result = JsonConvert.DeserializeObject(responseJson);
    
                    if (result.result != null)
                    {
                        string textWithoutPunctuation = result.result;
                        Console.WriteLine("Text without punctuation: " + textWithoutPunctuation);
                    }
                    else
                    {
                        Console.WriteLine("The key 'result' is not present in the response.");
                    }
                }
                else
                {
                    Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                }
            }
        }
    }
     `,
        `34.import requests
    import json
    
    api_key = 'YOUR_API_KEY_HERE'
    endpoint = 'remove-punctuation'
    url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
    data = {
        "text": "Hello! How are you? I'm fine, thank you."
    }
    
    # Send POST request
    response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
    
    # Handle response
    if response.status_code == 200:
        result = response.json()
        if 'result' in result:
            print("Text without punctuation:", result["result"])
        else:
            print("The key 'result' is not present in the response.")
    else:
        print("Error:", response.text)
     `,
        `34. const fetch = require('node-fetch');

    const apiKey = 'YOUR_API_KEY_HERE';
    const endpoint = 'remove-punctuation';
    const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
    const data = {
        text: "Hello! How are you? I'm fine, thank you."
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => Promise.reject(error));
            }
        })
        .then(result => {
            if (result.hasOwnProperty('result')) {
                console.log("Text without punctuation:", result.result);
            } else {
                console.log("The key 'result' is not present in the response.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
     `],
    ["35. C++",
        "35. Java",
        "35. C#",
        "35. Python",
        "35. JS"],
    [`36. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove URLs from text
    std::string removeUrls(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-urls";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove URLs from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "Visit us at https://example.com or check out our profile at https://deeptapod.com.";
    
        std::string textWithoutUrls = removeUrls(api_key, text);
    
        std::cout << "Text without URLs: " << textWithoutUrls << std::endl;
    
        return 0;
    }
    `,
        `36. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-urls";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "Visit us at https://example.com or check out our profile at https://deeptapod.com.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutUrls = result.getString("result");
                         System.out.println("Text without URLs: " + textWithoutUrls);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `36.using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-urls";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "Visit us at https://example.com or check out our profile at https://deeptapod.com." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutUrls = result.result;
                          Console.WriteLine("Text without URLs: " + textWithoutUrls);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `36. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-urls'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "Visit us at https://example.com or check out our profile at https://deeptapod.com."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without URLs:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `36. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'remove-urls';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "Visit us at https://example.com or check out our profile at https://deeptapod.com."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Text without URLs:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       S`],
    [`37. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove whitespace from text
    std::string removeWhitespace(const std::string& api_key, const std::string& text) {
        std::string endpoint = "remove-whitespace";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove whitespace from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "   This   text   has   extra   whitespace.   ";
    
        std::string textWithoutWhitespace = removeWhitespace(api_key, text);
    
        std::cout << "Text without whitespace: " << textWithoutWhitespace << std::endl;
    
        return 0;
    }
    `,
        `7. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-whitespace";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "   This   text   has   extra   whitespace.   ");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutWhitespace = result.getString("result");
                         System.out.println("Text without whitespace: " + textWithoutWhitespace);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
        `7.using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-whitespace";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "   This   text   has   extra   whitespace.   " };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutWhitespace = result.result;
                          Console.WriteLine("Text without whitespace: " + textWithoutWhitespace);
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine("Error: " + response.Content.ReadAsStringAsync().Result);
                  }
              }
          }
      }
      `,
        `37. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-whitespace'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "   This   text   has   extra   whitespace.   "
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Text without whitespace:", result["result"])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
        `37. const fetch = require('node-fetch');

      const apiKey = 'YOUR_API_KEY_HERE';
      const endpoint = 'remove-whitespace';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "   This   text   has   extra   whitespace.   "
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Text without whitespace:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `,
        [`38. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to remove words by length from text
    std::string removeWordsByLength(const std::string& api_key, const std::string& text, int length) {
        std::string endpoint = "remove-words-by-length";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {
            {"text", text},
            {"length", length}
        };
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to remove words by length from text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This text has words of varying lengths.";
    
        int lengthToRemove = 4; // Example: Remove words of length 4
    
        std::string textWithoutWords = removeWordsByLength(api_key, text, lengthToRemove);
    
        std::cout << "Text without words of length " << lengthToRemove << ": " << textWithoutWords << std::endl;
    
        return 0;
    }
    `,
            `38. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "remove-words-by-length";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             int lengthToRemove = 4; // Example: Remove words of length 4
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This text has words of varying lengths.");
             jsonInput.put("length", lengthToRemove);
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String textWithoutWords = result.getString("result");
                         System.out.println("Text without words of length " + lengthToRemove + ": " + textWithoutWords);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
            `38. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "remove-words-by-length";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This text has words of varying lengths.", length = 4 };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string textWithoutWords = result.result;
                          Console.WriteLine($"Text without words of length {data.length}: {textWithoutWords}");
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine($"Error: {response.StatusCode} - {response.Content.ReadAsStringAsync().Result}");
                  }
              }
          }
      }
      `,
            `38. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'remove-words-by-length'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This text has words of varying lengths.",
          "length": 4
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print(f"Text without words of length {data['length']}: {result['result']}")
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
            `38. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'remove-words-by-length';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This text has words of varying lengths.",
           length: 4
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log('Text without words of length ${data.length}: ${result.result}');
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
        ["39. C++", "39. Java", "39. C#", "39. Python", "39. JS"],

        [`40. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to reverse text using an API endpoint
    std::string reverseText(const std::string& api_key, const std::string& text) {
        std::string endpoint = "reverse-text";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to reverse text.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This text should be reversed.";
    
        std::string reversedText = reverseText(api_key, text);
    
        std::cout << "Reversed text: " << reversedText << std::endl;
    
        return 0;
    }
    `,
            `40. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "reverse-text";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This text should be reversed.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String reversedText = result.getString("result");
                         System.out.println("Reversed text: " + reversedText);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
            `40. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "reverse-text";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This text should be reversed." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string reversedText = result.result;
                          Console.WriteLine($"Reversed text: {reversedText}");
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine($"Error: {response.StatusCode} - {response.Content.ReadAsStringAsync().Result}");
                  }
              }
          }
      }
      `,
            `40.import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'reverse-text'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This text should be reversed."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Reversed text:", result['result'])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
            `40. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'reverse-text';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This text should be reversed."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Reversed text:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
        [`41. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to reverse words in a sentence using an API endpoint
    std::string reverseWordsInSentence(const std::string& api_key, const std::string& sentence) {
        std::string endpoint = "reverse-words-in-sentence";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", sentence}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to reverse words in sentence.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string sentence = "This is a sample sentence to reverse.";
    
        std::string reversedSentence = reverseWordsInSentence(api_key, sentence);
    
        std::cout << "Reversed sentence: " << reversedSentence << std::endl;
    
        return 0;
    }
    `,
            `41. import java.net.URI;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import org.json.JSONObject;
    
    public class Main {
        public static void main(String[] args) {
            String apiKey = "YOUR_API_KEY_HERE";
            String endpoint = "reverse-words-in-sentence";
            String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
    
            JSONObject jsonInput = new JSONObject();
            jsonInput.put("text", "This is a sample sentence to reverse.");
    
            try {
                HttpClient client = HttpClient.newHttpClient();
                HttpRequest request = HttpRequest.newBuilder()
                        .uri(new URI(url))
                        .header("Content-Type", "application/json")
                        .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                        .build();
    
                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                if (response.statusCode() == 200) {
                    JSONObject result = new JSONObject(response.body());
    
                    if (result.has("result")) {
                        String reversedSentence = result.getString("result");
                        System.out.println("Reversed sentence: " + reversedSentence);
                    } else {
                        System.out.println("The key 'result' is not present in the response.");
                    }
                } else {
                    System.out.println("Error: " + response.body());
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    `,
            `41. using System;
     using System.Net.Http;
     using System.Text;
     using System.Threading.Tasks;
     using Newtonsoft.Json;
     
     class Program
     {
         static async Task Main()
         {
             string apiKey = "YOUR_API_KEY_HERE";
             string endpoint = "reverse-words-in-sentence";
             string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
             var data = new { text = "This is a sample sentence to reverse." };
             var jsonData = JsonConvert.SerializeObject(data);
             var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
     
             using (var client = new HttpClient())
             {
                 var response = await client.PostAsync(url, content);
     
                 if (response.IsSuccessStatusCode)
                 {
                     var responseJson = await response.Content.ReadAsStringAsync();
                     dynamic result = JsonConvert.DeserializeObject(responseJson);
     
                     if (result.result != null)
                     {
                         string reversedSentence = result.result;
                         Console.WriteLine($"Reversed sentence: {reversedSentence}");
                     }
                     else
                     {
                         Console.WriteLine("The key 'result' is not present in the response.");
                     }
                 }
                 else
                 {
                     Console.WriteLine($"Error: {response.StatusCode} - {response.Content.ReadAsStringAsync().Result}");
                 }
             }
         }
     }
     `,
            `41. import requests
     import json
     
     api_key = 'YOUR_API_KEY_HERE'
     endpoint = 'reverse-words-in-sentence'
     url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
     data = {
         "text": "This is a sample sentence to reverse."
     }
     
     # Send POST request
     response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
     
     # Handle response
     if response.status_code == 200:
         result = response.json()
         if 'result' in result:
             print("Reversed sentence:", result['result'])
         else:
             print("The key 'result' is not present in the response.")
     else:
         print("Error:", response.text)
     `,
            `41. const fetch = require('node-fetch');

      const apiKey = 'YOUR_API_KEY_HERE';
      const endpoint = 'reverse-words-in-sentence';
      const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
      const data = {
          text: "This is a sample sentence to reverse."
      };
      
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  return response.json().then(error => Promise.reject(error));
              }
          })
          .then(result => {
              if (result.hasOwnProperty('result')) {
                  console.log("Reversed sentence:", result.result);
              } else {
                  console.log("The key 'result' is not present in the response.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      `],
        [`42. #include <iostream>
    #include <string>
    #include <curl/curl.h>
    #include "./json/single_include/nlohmann/json.hpp"
    
    // Callback function to handle the response data from CURL
    size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
        ((std::string*)userp)->append((char*)contents, size * nmemb);
        return size * nmemb;
    }
    
    // Function to convert text to uppercase using an API endpoint
    std::string convertToUppercase(const std::string& api_key, const std::string& text) {
        std::string endpoint = "uppercase-text";
        std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
        nlohmann::json data = {{"text", text}};
        std::string data_str = data.dump();
        CURL* curl;
        CURLcode res;
        std::string readBuffer;
        nlohmann::json response_json;
    
        curl_global_init(CURL_GLOBAL_DEFAULT);
        curl = curl_easy_init();
        if (curl) {
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
    
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    
            res = curl_easy_perform(curl);
    
            if (res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                response_json = nlohmann::json::parse(readBuffer);
            }
    
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        }
        curl_global_cleanup();
    
        if (response_json.contains("result")) {
            return response_json["result"].get<std::string>();
        } else {
            return "Unable to convert text to uppercase.";
        }
    }
    
    int main() {
        std::string api_key = "YOUR_API_KEY_HERE";
        std::string text = "This TEXT should Be CONVERTED to Uppercase.";
    
        std::string uppercaseText = convertToUppercase(api_key, text);
    
        std::cout << "Uppercase text: " << uppercaseText << std::endl;
    
        return 0;
    }
    `,
            `42. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "uppercase-text";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This TEXT should Be CONVERTED to Uppercase.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         String uppercaseText = result.getString("result");
                         System.out.println("Uppercase text: " + uppercaseText);
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
            `42. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "uppercase-text";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This TEXT should Be CONVERTED to Uppercase." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          string uppercaseText = result.result;
                          Console.WriteLine($"Uppercase text: {uppercaseText}");
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine($"Error: {response.StatusCode} - {response.Content.ReadAsStringAsync().Result}");
                  }
              }
          }
      }
      `,
            `42. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'uppercase-text'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This TEXT should Be CONVERTED to Uppercase."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Uppercase text:", result['result'])
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
            `42. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'uppercase-text';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This TEXT should Be CONVERTED to Uppercase."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Uppercase text:", result.result);
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });
       `],
        [`43. #include <iostream>
       #include <string>
       #include <curl/curl.h>
       #include "./json/single_include/nlohmann/json.hpp"
       
       // Callback function to handle the response data from CURL
       size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
           ((std::string*)userp)->append((char*)contents, size * nmemb);
           return size * nmemb;
       }
       
       // Function to fetch word length distribution using an API endpoint
       void fetchWordLengthDistribution(const std::string& api_key, const std::string& text) {
           std::string endpoint = "word-length-distribution";
           std::string url = "https://deeptapod.com/api/text/" + api_key + "/" + endpoint;
           nlohmann::json data = {{"text", text}};
           std::string data_str = data.dump();
           CURL* curl;
           CURLcode res;
           std::string readBuffer;
           nlohmann::json response_json;
       
           curl_global_init(CURL_GLOBAL_DEFAULT);
           curl = curl_easy_init();
           if (curl) {
               struct curl_slist* headers = nullptr;
               headers = curl_slist_append(headers, "Content-Type: application/json");
       
               curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
               curl_easy_setopt(curl, CURLOPT_POST, 1L);
               curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data_str.c_str());
               curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
               curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);
               curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
       
               res = curl_easy_perform(curl);
       
               if (res != CURLE_OK) {
                   std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
               } else {
                   response_json = nlohmann::json::parse(readBuffer);
               }
       
               curl_slist_free_all(headers);
               curl_easy_cleanup(curl);
           }
           curl_global_cleanup();
       
           if (response_json.contains("result")) {
               std::cout << "Word Length Distribution:" << std::endl;
               auto distribution = response_json["result"];
               for (auto it = distribution.begin(); it != distribution.end(); ++it) {
                   std::cout << it.key() << " characters: " << it.value() << std::endl;
               }
           } else {
               std::cout << "The key 'result' is not present in the response." << std::endl;
           }
       }
       
       int main() {
           std::string api_key = "YOUR_API_KEY_HERE";
           std::string text = "This is a sample text for word length distribution.";
       
           fetchWordLengthDistribution(api_key, text);
       
           return 0;
       }
       `,
            `43. import java.net.URI;
     import java.net.http.HttpClient;
     import java.net.http.HttpRequest;
     import java.net.http.HttpResponse;
     import java.nio.charset.StandardCharsets;
     import org.json.JSONObject;
     
     public class Main {
         public static void main(String[] args) {
             String apiKey = "YOUR_API_KEY_HERE";
             String endpoint = "word-length-distribution";
             String url = "https://deeptapod.com/api/text/" + apiKey + "/" + endpoint;
     
             JSONObject jsonInput = new JSONObject();
             jsonInput.put("text", "This is a sample text for word length distribution.");
     
             try {
                 HttpClient client = HttpClient.newHttpClient();
                 HttpRequest request = HttpRequest.newBuilder()
                         .uri(new URI(url))
                         .header("Content-Type", "application/json")
                         .POST(HttpRequest.BodyPublishers.ofString(jsonInput.toString(), StandardCharsets.UTF_8))
                         .build();
     
                 HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
                 if (response.statusCode() == 200) {
                     JSONObject result = new JSONObject(response.body());
     
                     if (result.has("result")) {
                         JSONObject distribution = result.getJSONObject("result");
                         System.out.println("Word Length Distribution:");
                         for (String key : distribution.keySet()) {
                             System.out.println(key + " characters: " + distribution.getInt(key));
                         }
                     } else {
                         System.out.println("The key 'result' is not present in the response.");
                     }
                 } else {
                     System.out.println("Error: " + response.body());
                 }
             } catch (Exception e) {
                 e.printStackTrace();
             }
         }
     }
     `,
            `43. using System;
      using System.Net.Http;
      using System.Text;
      using System.Threading.Tasks;
      using Newtonsoft.Json;
      
      class Program
      {
          static async Task Main()
          {
              string apiKey = "YOUR_API_KEY_HERE";
              string endpoint = "word-length-distribution";
              string url = $"https://deeptapod.com/api/text/{apiKey}/{endpoint}";
              var data = new { text = "This is a sample text for word length distribution." };
              var jsonData = JsonConvert.SerializeObject(data);
              var content = new StringContent(jsonData, Encoding.UTF8, "application/json");
      
              using (var client = new HttpClient())
              {
                  var response = await client.PostAsync(url, content);
      
                  if (response.IsSuccessStatusCode)
                  {
                      var responseJson = await response.Content.ReadAsStringAsync();
                      dynamic result = JsonConvert.DeserializeObject(responseJson);
      
                      if (result.result != null)
                      {
                          Console.WriteLine("Word Length Distribution:");
                          foreach (var item in result.result)
                          {
                              Console.WriteLine($"{item.Name} characters: {item.Value}");
                          }
                      }
                      else
                      {
                          Console.WriteLine("The key 'result' is not present in the response.");
                      }
                  }
                  else
                  {
                      Console.WriteLine($"Error: {response.StatusCode} - {response.Content.ReadAsStringAsync().Result}");
                  }
              }
          }
      }
      `,
            `43. import requests
      import json
      
      api_key = 'YOUR_API_KEY_HERE'
      endpoint = 'word-length-distribution'
      url = f'https://deeptapod.com/api/text/{api_key}/{endpoint}'
      data = {
          "text": "This is a sample text for word length distribution."
      }
      
      # Send POST request
      response = requests.post(url, headers={"Content-Type": "application/json"}, json=data)
      
      # Handle response
      if response.status_code == 200:
          result = response.json()
          if 'result' in result:
              print("Word Length Distribution:")
              for key in result['result']:
                  print(f"{key} characters: {result['result'][key]}")
          else:
              print("The key 'result' is not present in the response.")
      else:
          print("Error:", response.text)
      `,
            `43. const fetch = require('node-fetch');

       const apiKey = 'YOUR_API_KEY_HERE';
       const endpoint = 'word-length-distribution';
       const url = 'https://deeptapod.com/api/text/${apiKey}/${endpoint}';
       const data = {
           text: "This is a sample text for word length distribution."
       };
       
       fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   return response.json().then(error => Promise.reject(error));
               }
           })
           .then(result => {
               if (result.hasOwnProperty('result')) {
                   console.log("Word Length Distribution:");
                   for (let key in result.result) {
                       console.log('${key} characters: ${result.result[key]}');
                   }
               } else {
                   console.log("The key 'result' is not present in the response.");
               }
           })
           .catch(error => {
               console.error("Error:", error);
           });`]
    ]
];

const howtointegrte = [
    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to capitalize the first letter of each word in your text, use the endpoint `capitalize-first-letter`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/capitalize-first-letter`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `capitalize-first-letter`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to capitalize all text, use the endpoint `capitalize-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/capitalize-word`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `capitalize-text`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to count the number of characters in your text, use the endpoint `count-characters`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/count-characters`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `count-characters`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to count the number of sentences in your text, use the endpoint `count-sentences`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/count-sentences`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `count-sentences`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to count the number of words in your text, use the endpoint `count-word`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/count-word`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `count-word`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract anagrams from your text, use the endpoint `extract-anagrams`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-anagrams`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-anagrams`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract bigrams from your text, use the endpoint `extract-bigrams-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-bigrams`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-bigrams`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract capital words from your text, use the endpoint `extract-capital-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-capital-words`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-capital-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract common words from your text, use the endpoint `extract-common-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-common-words`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-common-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract dates from your text, use the endpoint `extract-dates`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-dates`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-dates`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract email addresses from your text, use the endpoint `extract-email-addresses`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-email-addresses`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-email-addresses`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract hashtags from your text, use the endpoint `extract-hashtags`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-hashtags`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-hashtags`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract lowercase words from your text, use the endpoint `extract-lowercase-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-lowercase-words`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-lowercase-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract numbers from your text, use the endpoint `extract-numbers`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-numbers`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-numbers`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract palindromes from your text, use the endpoint `extract-palindromes`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-palindromes`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-palindromes`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract phone numbers from your text, use the endpoint `extract-phone-numbers`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-phone-numbers`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-phone-numbers`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract Roman numerals from your text, use the endpoint `extract-roman-numerals`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-roman-numerals`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-roman-numerals`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, extract times from your text, use the endpoint `extract-times`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-times`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-times`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract trigrams from your text, use the endpoint `extract-trigrams`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-trigrams`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-trigrams`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to extract URLs from your text, use the endpoint `extract-urls`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/extract-urls`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `extract-urls`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, find the longest word in your text, use the endpoint `find-longest-word`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/find-longest-word`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `find-longest-word`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, find rare words in your text, use the endpoint `find-rare-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/find-rare-words`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `find-rare-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, find the shortest word in your text, use the endpoint `find-shortest-word`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/find-shortest-word`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `find-shortest-word`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to convert all text to lowercase, use the endpoint `lowercase-text`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/lowercase-text`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `lowercase-text`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, remove blanks from your text, use the endpoint `remove-blanks`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-blanks`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-blanks`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, remove duplicate words from your text, use the endpoint `remove-duplicate-words`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-duplicate-words`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-duplicate-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, remove email addresses from your text, use the endpoint `remove-email-addresses`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-email-addresses`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-email-addresses`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove hashtags from your text, use the endpoint `remove-hashtags`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-hashtags`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-hashtags`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove lowercase words from your text, use the endpoint `remove-emojis`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-lowercase-words`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-lowercase-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove numbers from your text, use the endpoint `remove-numbers`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-numbers`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-numbers`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove phone numbers from your text, use the endpoint `remove-phone-numbers`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-phone-numbers`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-phone-numbers`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove Roman numerals from your text, use the endpoint `remove-roman-numerals`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-roman-numerals`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-roman-numerals`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, remove times from your text, use the endpoint `remove-times`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-times`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-times`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove trigrams from your text, use the endpoint `remove-trigrams`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-trigrams`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-trigrams`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to remove URLs from your text, use the endpoint `remove-urls`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-urls`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `remove-urls`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to reverse the order of words in your text, use the endpoint `reverse-text`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/reverse-text`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `reverse-words-order`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, reverse-words-in-sentence alphabetically in your text, use the endpoint `reverse-words-in-sentence`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/reverse-words-in-sentence`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `sort-words`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to title-case your text, use the endpoint `uppercase-text`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/uppercase-text`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `titlecase-text`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance.",

    "Log in to your DeepTapod dashboard and locate your unique API key provided in your account.\n\n2. Each API function corresponds to a specific endpoint. For example, to trim leading and trailing whitespace from your text, use the endpoint `remove-whitespace`. Prepare your request body in JSON format with the key \"text\" and the value being the text you want to analyze. Make an HTTP POST request to the URL:\n\n`https://deeptapod.com/api/text/your-api-key/remove-whitespace`\n\n3. Replace `{apiKey}` with your unique API key and `{endpoint}` with the desired function, such as `trim-whitespace`.\n\nIf the request is successful, you will receive a JSON response with the processed text. If your API key is invalid, you will receive an error message indicating that you do not have access to the functions.\n\n4. Ensure your API key is correct and verify that your request body is properly formatted in JSON. Refer to our [API documentation](https://deeptapod.com/docs) or contact our support team for additional assistance."
];
