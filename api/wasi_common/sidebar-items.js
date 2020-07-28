initSidebarItems({"enum":[["WasiCtxBuilderError","Possible errors when `WasiCtxBuilder` fails building `WasiCtx`."]],"fn":[["preopen_dir",""]],"mod":[["fs","A very experimental module modeled providing a high-level and safe filesystem interface, modeled after `std::fs`, implemented on top of WASI functions."],["old",""],["snapshots",""],["virtfs",""],["wasi","Types and constants shared between 32-bit and 64-bit wasi. Types involving pointer or `usize`-sized data are excluded here, so this file only contains fixed-size types, so it's host/target independent."]],"struct":[["HandleRights","Represents rights of a `Handle`, either already held or required."],["OsDir","A directory in the operating system's file system. Its impl of `Handle` is in `sys::osdir`. This type is exposed to all other modules as `sys::osdir::OsDir` when configured."],["OsFile","A file backed by the operating system's file system. Dereferences to a `RawOsHandle`.  Its impl of `Handle` uses Rust's `std` to implement all file descriptor operations."],["OsOther","`OsOther` is something of a catch-all for everything not covered with the specific handle types (`OsFile`, `OsDir`, `Stdio`). It currently encapsulates handles such as OS pipes, sockets, streams, etc. As such, when redirecting stdio within `WasiCtxBuilder`, the redirected pipe should be encapsulated within this instance and not `OsFile` which represents a regular OS file."],["WasiCtx",""],["WasiCtxBuilder","A builder allowing customizable construction of `WasiCtx` instances."]],"trait":[["Handle","Generic interface for all WASI-compatible handles. We currently group these into two groups: * OS-based resources (actual, real resources): `OsFile`, `OsDir`, `OsOther`, and `Stdio`, * virtual files and directories: VirtualDir`, and `InMemoryFile`."]]});