package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "logger",
    srcs = glob(["*.ts"]),
    node_modules = "@npm_app//typescript:typescript__typings",
    deps = [
        "@npm_app//:node_modules",
    ]
)
