cmd_Release/extractCommonWord.node := c++ -bundle -undefined dynamic_lookup -Wl,-search_paths_first -mmacosx-version-min=11.0 -arch arm64 -L./Release -stdlib=libc++  -o Release/extractCommonWord.node Release/obj.target/extractCommonWord/extract-common-word.o 
