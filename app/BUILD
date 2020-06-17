package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

# filegroup(
#     name = "data",
#     srcs = glob([
#         "src/**/*.json",
#     ]),
# )

ts_library(
    name = "app",
    srcs = glob(["src/**/*.ts"]),
    node_modules = "@npm_app//typescript:typescript__typings",
    deps = [
        "@npm_app//:node_modules",
    ]
)

nodejs_binary(
    name = "run",
    data = [
        # ":data",
        ":app",
    ],
    entry_point = "src/index",
)
