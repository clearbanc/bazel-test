package(default_visibility = ["//visibility:private"])

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "app",
    srcs = glob(["src/**/*.ts"]),
    data = glob(["src/**/*.js", "data/**/*.json"]),
    deps = [
        "@npm//@types",
        "@npm//lodash",
        "@npm//koa",
        "//packages/logger"
    ]
)

nodejs_binary(
    name = "run",
    data = [
        ":app",
    ],
    entry_point = "src/index",
)
