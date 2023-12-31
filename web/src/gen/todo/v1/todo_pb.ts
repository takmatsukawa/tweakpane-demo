// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file todo/v1/todo.proto (package todo.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message todo.v1.Todo
 */
export class Todo extends Message<Todo> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * @generated from field: bool done = 4;
   */
  done = false;

  constructor(data?: PartialMessage<Todo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.v1.Todo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "done", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Todo {
    return new Todo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Todo {
    return new Todo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Todo {
    return new Todo().fromJsonString(jsonString, options);
  }

  static equals(a: Todo | PlainMessage<Todo> | undefined, b: Todo | PlainMessage<Todo> | undefined): boolean {
    return proto3.util.equals(Todo, a, b);
  }
}

/**
 * @generated from message todo.v1.TodoListRequest
 */
export class TodoListRequest extends Message<TodoListRequest> {
  constructor(data?: PartialMessage<TodoListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.v1.TodoListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TodoListRequest {
    return new TodoListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TodoListRequest {
    return new TodoListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TodoListRequest {
    return new TodoListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TodoListRequest | PlainMessage<TodoListRequest> | undefined, b: TodoListRequest | PlainMessage<TodoListRequest> | undefined): boolean {
    return proto3.util.equals(TodoListRequest, a, b);
  }
}

/**
 * @generated from message todo.v1.TodoListResponse
 */
export class TodoListResponse extends Message<TodoListResponse> {
  /**
   * @generated from field: repeated todo.v1.Todo todos = 1;
   */
  todos: Todo[] = [];

  constructor(data?: PartialMessage<TodoListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "todo.v1.TodoListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "todos", kind: "message", T: Todo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TodoListResponse {
    return new TodoListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TodoListResponse {
    return new TodoListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TodoListResponse {
    return new TodoListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TodoListResponse | PlainMessage<TodoListResponse> | undefined, b: TodoListResponse | PlainMessage<TodoListResponse> | undefined): boolean {
    return proto3.util.equals(TodoListResponse, a, b);
  }
}

