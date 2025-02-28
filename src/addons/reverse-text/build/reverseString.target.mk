# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := reverseString
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=reverseString' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=11.0 \
	-arch \
	arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++17 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/include/node \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/src \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/openssl/config \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/openssl/openssl/include \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/uv/include \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/zlib \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/v8/include

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=reverseString' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-O3 \
	-gdwarf-2 \
	-flto \
	-mmacosx-version-min=11.0 \
	-arch \
	arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++17 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/include/node \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/src \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/openssl/config \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/openssl/openssl/include \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/uv/include \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/zlib \
	-I/Users/narektashchyan/Library/Caches/node-gyp/22.4.0/deps/v8/include

OBJS := \
	$(obj).target/$(TARGET)/reverse-text.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first \
	-mmacosx-version-min=11.0 \
	-arch \
	arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first \
	-mmacosx-version-min=11.0 \
	-arch \
	arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first

LIBS :=

$(builddir)/reverseString.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/reverseString.node: LIBS := $(LIBS)
$(builddir)/reverseString.node: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/reverseString.node: TOOLSET := $(TOOLSET)
$(builddir)/reverseString.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(builddir)/reverseString.node
# Add target alias
.PHONY: reverseString
reverseString: $(builddir)/reverseString.node

# Short alias for building this executable.
.PHONY: reverseString.node
reverseString.node: $(builddir)/reverseString.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/reverseString.node

