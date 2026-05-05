
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model SanPham
 * 
 */
export type SanPham = $Result.DefaultSelection<Prisma.$SanPhamPayload>
/**
 * Model DanhMucSanPham
 * 
 */
export type DanhMucSanPham = $Result.DefaultSelection<Prisma.$DanhMucSanPhamPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanPham`: Exposes CRUD operations for the **SanPham** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SanPhams
    * const sanPhams = await prisma.sanPham.findMany()
    * ```
    */
  get sanPham(): Prisma.SanPhamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.danhMucSanPham`: Exposes CRUD operations for the **DanhMucSanPham** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DanhMucSanPhams
    * const danhMucSanPhams = await prisma.danhMucSanPham.findMany()
    * ```
    */
  get danhMucSanPham(): Prisma.DanhMucSanPhamDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    SanPham: 'SanPham',
    DanhMucSanPham: 'DanhMucSanPham'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "sanPham" | "danhMucSanPham"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      SanPham: {
        payload: Prisma.$SanPhamPayload<ExtArgs>
        fields: Prisma.SanPhamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanPhamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanPhamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          findFirst: {
            args: Prisma.SanPhamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanPhamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          findMany: {
            args: Prisma.SanPhamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>[]
          }
          create: {
            args: Prisma.SanPhamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          createMany: {
            args: Prisma.SanPhamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SanPhamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          update: {
            args: Prisma.SanPhamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          deleteMany: {
            args: Prisma.SanPhamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanPhamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SanPhamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          aggregate: {
            args: Prisma.SanPhamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanPham>
          }
          groupBy: {
            args: Prisma.SanPhamGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanPhamGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanPhamCountArgs<ExtArgs>
            result: $Utils.Optional<SanPhamCountAggregateOutputType> | number
          }
        }
      }
      DanhMucSanPham: {
        payload: Prisma.$DanhMucSanPhamPayload<ExtArgs>
        fields: Prisma.DanhMucSanPhamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DanhMucSanPhamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DanhMucSanPhamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>
          }
          findFirst: {
            args: Prisma.DanhMucSanPhamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DanhMucSanPhamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>
          }
          findMany: {
            args: Prisma.DanhMucSanPhamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>[]
          }
          create: {
            args: Prisma.DanhMucSanPhamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>
          }
          createMany: {
            args: Prisma.DanhMucSanPhamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DanhMucSanPhamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>
          }
          update: {
            args: Prisma.DanhMucSanPhamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>
          }
          deleteMany: {
            args: Prisma.DanhMucSanPhamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DanhMucSanPhamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DanhMucSanPhamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucSanPhamPayload>
          }
          aggregate: {
            args: Prisma.DanhMucSanPhamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDanhMucSanPham>
          }
          groupBy: {
            args: Prisma.DanhMucSanPhamGroupByArgs<ExtArgs>
            result: $Utils.Optional<DanhMucSanPhamGroupByOutputType>[]
          }
          count: {
            args: Prisma.DanhMucSanPhamCountArgs<ExtArgs>
            result: $Utils.Optional<DanhMucSanPhamCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    sanPham?: SanPhamOmit
    danhMucSanPham?: DanhMucSanPhamOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DanhMucSanPhamCountOutputType
   */

  export type DanhMucSanPhamCountOutputType = {
    sanPhams: number
  }

  export type DanhMucSanPhamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sanPhams?: boolean | DanhMucSanPhamCountOutputTypeCountSanPhamsArgs
  }

  // Custom InputTypes
  /**
   * DanhMucSanPhamCountOutputType without action
   */
  export type DanhMucSanPhamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPhamCountOutputType
     */
    select?: DanhMucSanPhamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DanhMucSanPhamCountOutputType without action
   */
  export type DanhMucSanPhamCountOutputTypeCountSanPhamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanPhamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    resetPasswordToken: string | null
    resetPasswordExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    resetPasswordToken: string | null
    resetPasswordExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    resetPasswordToken: number
    resetPasswordExpiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    resetPasswordToken?: true
    resetPasswordExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    resetPasswordToken?: true
    resetPasswordExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    resetPasswordToken?: true
    resetPasswordExpiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string | null
    password: string
    resetPasswordToken: string | null
    resetPasswordExpiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "resetPasswordToken" | "resetPasswordExpiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string | null
      password: string
      resetPasswordToken: string | null
      resetPasswordExpiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpiresAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model SanPham
   */

  export type AggregateSanPham = {
    _count: SanPhamCountAggregateOutputType | null
    _avg: SanPhamAvgAggregateOutputType | null
    _sum: SanPhamSumAggregateOutputType | null
    _min: SanPhamMinAggregateOutputType | null
    _max: SanPhamMaxAggregateOutputType | null
  }

  export type SanPhamAvgAggregateOutputType = {
    id: number | null
    gia: Decimal | null
    soLuongTon: number | null
    danhMucId: number | null
  }

  export type SanPhamSumAggregateOutputType = {
    id: number | null
    gia: Decimal | null
    soLuongTon: number | null
    danhMucId: number | null
  }

  export type SanPhamMinAggregateOutputType = {
    id: number | null
    tenSanPham: string | null
    moTa: string | null
    gia: Decimal | null
    soLuongTon: number | null
    danhMucId: number | null
    hinhAnhUrl: string | null
    hoatDong: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SanPhamMaxAggregateOutputType = {
    id: number | null
    tenSanPham: string | null
    moTa: string | null
    gia: Decimal | null
    soLuongTon: number | null
    danhMucId: number | null
    hinhAnhUrl: string | null
    hoatDong: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SanPhamCountAggregateOutputType = {
    id: number
    tenSanPham: number
    moTa: number
    gia: number
    soLuongTon: number
    danhMucId: number
    hinhAnhUrl: number
    hoatDong: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SanPhamAvgAggregateInputType = {
    id?: true
    gia?: true
    soLuongTon?: true
    danhMucId?: true
  }

  export type SanPhamSumAggregateInputType = {
    id?: true
    gia?: true
    soLuongTon?: true
    danhMucId?: true
  }

  export type SanPhamMinAggregateInputType = {
    id?: true
    tenSanPham?: true
    moTa?: true
    gia?: true
    soLuongTon?: true
    danhMucId?: true
    hinhAnhUrl?: true
    hoatDong?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SanPhamMaxAggregateInputType = {
    id?: true
    tenSanPham?: true
    moTa?: true
    gia?: true
    soLuongTon?: true
    danhMucId?: true
    hinhAnhUrl?: true
    hoatDong?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SanPhamCountAggregateInputType = {
    id?: true
    tenSanPham?: true
    moTa?: true
    gia?: true
    soLuongTon?: true
    danhMucId?: true
    hinhAnhUrl?: true
    hoatDong?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SanPhamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanPham to aggregate.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SanPhams
    **/
    _count?: true | SanPhamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SanPhamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SanPhamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanPhamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanPhamMaxAggregateInputType
  }

  export type GetSanPhamAggregateType<T extends SanPhamAggregateArgs> = {
        [P in keyof T & keyof AggregateSanPham]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanPham[P]>
      : GetScalarType<T[P], AggregateSanPham[P]>
  }




  export type SanPhamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanPhamWhereInput
    orderBy?: SanPhamOrderByWithAggregationInput | SanPhamOrderByWithAggregationInput[]
    by: SanPhamScalarFieldEnum[] | SanPhamScalarFieldEnum
    having?: SanPhamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanPhamCountAggregateInputType | true
    _avg?: SanPhamAvgAggregateInputType
    _sum?: SanPhamSumAggregateInputType
    _min?: SanPhamMinAggregateInputType
    _max?: SanPhamMaxAggregateInputType
  }

  export type SanPhamGroupByOutputType = {
    id: number
    tenSanPham: string
    moTa: string | null
    gia: Decimal
    soLuongTon: number
    danhMucId: number
    hinhAnhUrl: string | null
    hoatDong: boolean
    createdAt: Date
    updatedAt: Date
    _count: SanPhamCountAggregateOutputType | null
    _avg: SanPhamAvgAggregateOutputType | null
    _sum: SanPhamSumAggregateOutputType | null
    _min: SanPhamMinAggregateOutputType | null
    _max: SanPhamMaxAggregateOutputType | null
  }

  type GetSanPhamGroupByPayload<T extends SanPhamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanPhamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanPhamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanPhamGroupByOutputType[P]>
            : GetScalarType<T[P], SanPhamGroupByOutputType[P]>
        }
      >
    >


  export type SanPhamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenSanPham?: boolean
    moTa?: boolean
    gia?: boolean
    soLuongTon?: boolean
    danhMucId?: boolean
    hinhAnhUrl?: boolean
    hoatDong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    danhMuc?: boolean | DanhMucSanPhamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanPham"]>



  export type SanPhamSelectScalar = {
    id?: boolean
    tenSanPham?: boolean
    moTa?: boolean
    gia?: boolean
    soLuongTon?: boolean
    danhMucId?: boolean
    hinhAnhUrl?: boolean
    hoatDong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SanPhamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenSanPham" | "moTa" | "gia" | "soLuongTon" | "danhMucId" | "hinhAnhUrl" | "hoatDong" | "createdAt" | "updatedAt", ExtArgs["result"]["sanPham"]>
  export type SanPhamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    danhMuc?: boolean | DanhMucSanPhamDefaultArgs<ExtArgs>
  }

  export type $SanPhamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SanPham"
    objects: {
      danhMuc: Prisma.$DanhMucSanPhamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenSanPham: string
      moTa: string | null
      gia: Prisma.Decimal
      soLuongTon: number
      danhMucId: number
      hinhAnhUrl: string | null
      hoatDong: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sanPham"]>
    composites: {}
  }

  type SanPhamGetPayload<S extends boolean | null | undefined | SanPhamDefaultArgs> = $Result.GetResult<Prisma.$SanPhamPayload, S>

  type SanPhamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanPhamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanPhamCountAggregateInputType | true
    }

  export interface SanPhamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SanPham'], meta: { name: 'SanPham' } }
    /**
     * Find zero or one SanPham that matches the filter.
     * @param {SanPhamFindUniqueArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanPhamFindUniqueArgs>(args: SelectSubset<T, SanPhamFindUniqueArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SanPham that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanPhamFindUniqueOrThrowArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanPhamFindUniqueOrThrowArgs>(args: SelectSubset<T, SanPhamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanPham that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamFindFirstArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanPhamFindFirstArgs>(args?: SelectSubset<T, SanPhamFindFirstArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanPham that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamFindFirstOrThrowArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanPhamFindFirstOrThrowArgs>(args?: SelectSubset<T, SanPhamFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SanPhams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SanPhams
     * const sanPhams = await prisma.sanPham.findMany()
     * 
     * // Get first 10 SanPhams
     * const sanPhams = await prisma.sanPham.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sanPhamWithIdOnly = await prisma.sanPham.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SanPhamFindManyArgs>(args?: SelectSubset<T, SanPhamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SanPham.
     * @param {SanPhamCreateArgs} args - Arguments to create a SanPham.
     * @example
     * // Create one SanPham
     * const SanPham = await prisma.sanPham.create({
     *   data: {
     *     // ... data to create a SanPham
     *   }
     * })
     * 
     */
    create<T extends SanPhamCreateArgs>(args: SelectSubset<T, SanPhamCreateArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SanPhams.
     * @param {SanPhamCreateManyArgs} args - Arguments to create many SanPhams.
     * @example
     * // Create many SanPhams
     * const sanPham = await prisma.sanPham.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanPhamCreateManyArgs>(args?: SelectSubset<T, SanPhamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SanPham.
     * @param {SanPhamDeleteArgs} args - Arguments to delete one SanPham.
     * @example
     * // Delete one SanPham
     * const SanPham = await prisma.sanPham.delete({
     *   where: {
     *     // ... filter to delete one SanPham
     *   }
     * })
     * 
     */
    delete<T extends SanPhamDeleteArgs>(args: SelectSubset<T, SanPhamDeleteArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SanPham.
     * @param {SanPhamUpdateArgs} args - Arguments to update one SanPham.
     * @example
     * // Update one SanPham
     * const sanPham = await prisma.sanPham.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanPhamUpdateArgs>(args: SelectSubset<T, SanPhamUpdateArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SanPhams.
     * @param {SanPhamDeleteManyArgs} args - Arguments to filter SanPhams to delete.
     * @example
     * // Delete a few SanPhams
     * const { count } = await prisma.sanPham.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanPhamDeleteManyArgs>(args?: SelectSubset<T, SanPhamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SanPhams
     * const sanPham = await prisma.sanPham.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanPhamUpdateManyArgs>(args: SelectSubset<T, SanPhamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SanPham.
     * @param {SanPhamUpsertArgs} args - Arguments to update or create a SanPham.
     * @example
     * // Update or create a SanPham
     * const sanPham = await prisma.sanPham.upsert({
     *   create: {
     *     // ... data to create a SanPham
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SanPham we want to update
     *   }
     * })
     */
    upsert<T extends SanPhamUpsertArgs>(args: SelectSubset<T, SanPhamUpsertArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamCountArgs} args - Arguments to filter SanPhams to count.
     * @example
     * // Count the number of SanPhams
     * const count = await prisma.sanPham.count({
     *   where: {
     *     // ... the filter for the SanPhams we want to count
     *   }
     * })
    **/
    count<T extends SanPhamCountArgs>(
      args?: Subset<T, SanPhamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanPhamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SanPhamAggregateArgs>(args: Subset<T, SanPhamAggregateArgs>): Prisma.PrismaPromise<GetSanPhamAggregateType<T>>

    /**
     * Group by SanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SanPhamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanPhamGroupByArgs['orderBy'] }
        : { orderBy?: SanPhamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SanPhamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanPhamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SanPham model
   */
  readonly fields: SanPhamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SanPham.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanPhamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    danhMuc<T extends DanhMucSanPhamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DanhMucSanPhamDefaultArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SanPham model
   */
  interface SanPhamFieldRefs {
    readonly id: FieldRef<"SanPham", 'Int'>
    readonly tenSanPham: FieldRef<"SanPham", 'String'>
    readonly moTa: FieldRef<"SanPham", 'String'>
    readonly gia: FieldRef<"SanPham", 'Decimal'>
    readonly soLuongTon: FieldRef<"SanPham", 'Int'>
    readonly danhMucId: FieldRef<"SanPham", 'Int'>
    readonly hinhAnhUrl: FieldRef<"SanPham", 'String'>
    readonly hoatDong: FieldRef<"SanPham", 'Boolean'>
    readonly createdAt: FieldRef<"SanPham", 'DateTime'>
    readonly updatedAt: FieldRef<"SanPham", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SanPham findUnique
   */
  export type SanPhamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham findUniqueOrThrow
   */
  export type SanPhamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham findFirst
   */
  export type SanPhamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanPhams.
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanPhams.
     */
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * SanPham findFirstOrThrow
   */
  export type SanPhamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanPhams.
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanPhams.
     */
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * SanPham findMany
   */
  export type SanPhamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPhams to fetch.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SanPhams.
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanPhams.
     */
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * SanPham create
   */
  export type SanPhamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * The data needed to create a SanPham.
     */
    data: XOR<SanPhamCreateInput, SanPhamUncheckedCreateInput>
  }

  /**
   * SanPham createMany
   */
  export type SanPhamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SanPhams.
     */
    data: SanPhamCreateManyInput | SanPhamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanPham update
   */
  export type SanPhamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * The data needed to update a SanPham.
     */
    data: XOR<SanPhamUpdateInput, SanPhamUncheckedUpdateInput>
    /**
     * Choose, which SanPham to update.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham updateMany
   */
  export type SanPhamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SanPhams.
     */
    data: XOR<SanPhamUpdateManyMutationInput, SanPhamUncheckedUpdateManyInput>
    /**
     * Filter which SanPhams to update
     */
    where?: SanPhamWhereInput
    /**
     * Limit how many SanPhams to update.
     */
    limit?: number
  }

  /**
   * SanPham upsert
   */
  export type SanPhamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * The filter to search for the SanPham to update in case it exists.
     */
    where: SanPhamWhereUniqueInput
    /**
     * In case the SanPham found by the `where` argument doesn't exist, create a new SanPham with this data.
     */
    create: XOR<SanPhamCreateInput, SanPhamUncheckedCreateInput>
    /**
     * In case the SanPham was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanPhamUpdateInput, SanPhamUncheckedUpdateInput>
  }

  /**
   * SanPham delete
   */
  export type SanPhamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter which SanPham to delete.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham deleteMany
   */
  export type SanPhamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanPhams to delete
     */
    where?: SanPhamWhereInput
    /**
     * Limit how many SanPhams to delete.
     */
    limit?: number
  }

  /**
   * SanPham without action
   */
  export type SanPhamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
  }


  /**
   * Model DanhMucSanPham
   */

  export type AggregateDanhMucSanPham = {
    _count: DanhMucSanPhamCountAggregateOutputType | null
    _avg: DanhMucSanPhamAvgAggregateOutputType | null
    _sum: DanhMucSanPhamSumAggregateOutputType | null
    _min: DanhMucSanPhamMinAggregateOutputType | null
    _max: DanhMucSanPhamMaxAggregateOutputType | null
  }

  export type DanhMucSanPhamAvgAggregateOutputType = {
    id: number | null
  }

  export type DanhMucSanPhamSumAggregateOutputType = {
    id: number | null
  }

  export type DanhMucSanPhamMinAggregateOutputType = {
    id: number | null
    tenDanhMuc: string | null
    moTa: string | null
    hoatDong: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DanhMucSanPhamMaxAggregateOutputType = {
    id: number | null
    tenDanhMuc: string | null
    moTa: string | null
    hoatDong: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DanhMucSanPhamCountAggregateOutputType = {
    id: number
    tenDanhMuc: number
    moTa: number
    hoatDong: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DanhMucSanPhamAvgAggregateInputType = {
    id?: true
  }

  export type DanhMucSanPhamSumAggregateInputType = {
    id?: true
  }

  export type DanhMucSanPhamMinAggregateInputType = {
    id?: true
    tenDanhMuc?: true
    moTa?: true
    hoatDong?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DanhMucSanPhamMaxAggregateInputType = {
    id?: true
    tenDanhMuc?: true
    moTa?: true
    hoatDong?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DanhMucSanPhamCountAggregateInputType = {
    id?: true
    tenDanhMuc?: true
    moTa?: true
    hoatDong?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DanhMucSanPhamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DanhMucSanPham to aggregate.
     */
    where?: DanhMucSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucSanPhams to fetch.
     */
    orderBy?: DanhMucSanPhamOrderByWithRelationInput | DanhMucSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DanhMucSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DanhMucSanPhams
    **/
    _count?: true | DanhMucSanPhamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DanhMucSanPhamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DanhMucSanPhamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DanhMucSanPhamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DanhMucSanPhamMaxAggregateInputType
  }

  export type GetDanhMucSanPhamAggregateType<T extends DanhMucSanPhamAggregateArgs> = {
        [P in keyof T & keyof AggregateDanhMucSanPham]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDanhMucSanPham[P]>
      : GetScalarType<T[P], AggregateDanhMucSanPham[P]>
  }




  export type DanhMucSanPhamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanhMucSanPhamWhereInput
    orderBy?: DanhMucSanPhamOrderByWithAggregationInput | DanhMucSanPhamOrderByWithAggregationInput[]
    by: DanhMucSanPhamScalarFieldEnum[] | DanhMucSanPhamScalarFieldEnum
    having?: DanhMucSanPhamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DanhMucSanPhamCountAggregateInputType | true
    _avg?: DanhMucSanPhamAvgAggregateInputType
    _sum?: DanhMucSanPhamSumAggregateInputType
    _min?: DanhMucSanPhamMinAggregateInputType
    _max?: DanhMucSanPhamMaxAggregateInputType
  }

  export type DanhMucSanPhamGroupByOutputType = {
    id: number
    tenDanhMuc: string
    moTa: string | null
    hoatDong: boolean
    createdAt: Date
    updatedAt: Date
    _count: DanhMucSanPhamCountAggregateOutputType | null
    _avg: DanhMucSanPhamAvgAggregateOutputType | null
    _sum: DanhMucSanPhamSumAggregateOutputType | null
    _min: DanhMucSanPhamMinAggregateOutputType | null
    _max: DanhMucSanPhamMaxAggregateOutputType | null
  }

  type GetDanhMucSanPhamGroupByPayload<T extends DanhMucSanPhamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DanhMucSanPhamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DanhMucSanPhamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DanhMucSanPhamGroupByOutputType[P]>
            : GetScalarType<T[P], DanhMucSanPhamGroupByOutputType[P]>
        }
      >
    >


  export type DanhMucSanPhamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenDanhMuc?: boolean
    moTa?: boolean
    hoatDong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sanPhams?: boolean | DanhMucSanPham$sanPhamsArgs<ExtArgs>
    _count?: boolean | DanhMucSanPhamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["danhMucSanPham"]>



  export type DanhMucSanPhamSelectScalar = {
    id?: boolean
    tenDanhMuc?: boolean
    moTa?: boolean
    hoatDong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DanhMucSanPhamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenDanhMuc" | "moTa" | "hoatDong" | "createdAt" | "updatedAt", ExtArgs["result"]["danhMucSanPham"]>
  export type DanhMucSanPhamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sanPhams?: boolean | DanhMucSanPham$sanPhamsArgs<ExtArgs>
    _count?: boolean | DanhMucSanPhamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DanhMucSanPhamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DanhMucSanPham"
    objects: {
      sanPhams: Prisma.$SanPhamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenDanhMuc: string
      moTa: string | null
      hoatDong: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["danhMucSanPham"]>
    composites: {}
  }

  type DanhMucSanPhamGetPayload<S extends boolean | null | undefined | DanhMucSanPhamDefaultArgs> = $Result.GetResult<Prisma.$DanhMucSanPhamPayload, S>

  type DanhMucSanPhamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DanhMucSanPhamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DanhMucSanPhamCountAggregateInputType | true
    }

  export interface DanhMucSanPhamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DanhMucSanPham'], meta: { name: 'DanhMucSanPham' } }
    /**
     * Find zero or one DanhMucSanPham that matches the filter.
     * @param {DanhMucSanPhamFindUniqueArgs} args - Arguments to find a DanhMucSanPham
     * @example
     * // Get one DanhMucSanPham
     * const danhMucSanPham = await prisma.danhMucSanPham.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DanhMucSanPhamFindUniqueArgs>(args: SelectSubset<T, DanhMucSanPhamFindUniqueArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DanhMucSanPham that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DanhMucSanPhamFindUniqueOrThrowArgs} args - Arguments to find a DanhMucSanPham
     * @example
     * // Get one DanhMucSanPham
     * const danhMucSanPham = await prisma.danhMucSanPham.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DanhMucSanPhamFindUniqueOrThrowArgs>(args: SelectSubset<T, DanhMucSanPhamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DanhMucSanPham that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamFindFirstArgs} args - Arguments to find a DanhMucSanPham
     * @example
     * // Get one DanhMucSanPham
     * const danhMucSanPham = await prisma.danhMucSanPham.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DanhMucSanPhamFindFirstArgs>(args?: SelectSubset<T, DanhMucSanPhamFindFirstArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DanhMucSanPham that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamFindFirstOrThrowArgs} args - Arguments to find a DanhMucSanPham
     * @example
     * // Get one DanhMucSanPham
     * const danhMucSanPham = await prisma.danhMucSanPham.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DanhMucSanPhamFindFirstOrThrowArgs>(args?: SelectSubset<T, DanhMucSanPhamFindFirstOrThrowArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DanhMucSanPhams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DanhMucSanPhams
     * const danhMucSanPhams = await prisma.danhMucSanPham.findMany()
     * 
     * // Get first 10 DanhMucSanPhams
     * const danhMucSanPhams = await prisma.danhMucSanPham.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const danhMucSanPhamWithIdOnly = await prisma.danhMucSanPham.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DanhMucSanPhamFindManyArgs>(args?: SelectSubset<T, DanhMucSanPhamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DanhMucSanPham.
     * @param {DanhMucSanPhamCreateArgs} args - Arguments to create a DanhMucSanPham.
     * @example
     * // Create one DanhMucSanPham
     * const DanhMucSanPham = await prisma.danhMucSanPham.create({
     *   data: {
     *     // ... data to create a DanhMucSanPham
     *   }
     * })
     * 
     */
    create<T extends DanhMucSanPhamCreateArgs>(args: SelectSubset<T, DanhMucSanPhamCreateArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DanhMucSanPhams.
     * @param {DanhMucSanPhamCreateManyArgs} args - Arguments to create many DanhMucSanPhams.
     * @example
     * // Create many DanhMucSanPhams
     * const danhMucSanPham = await prisma.danhMucSanPham.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DanhMucSanPhamCreateManyArgs>(args?: SelectSubset<T, DanhMucSanPhamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DanhMucSanPham.
     * @param {DanhMucSanPhamDeleteArgs} args - Arguments to delete one DanhMucSanPham.
     * @example
     * // Delete one DanhMucSanPham
     * const DanhMucSanPham = await prisma.danhMucSanPham.delete({
     *   where: {
     *     // ... filter to delete one DanhMucSanPham
     *   }
     * })
     * 
     */
    delete<T extends DanhMucSanPhamDeleteArgs>(args: SelectSubset<T, DanhMucSanPhamDeleteArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DanhMucSanPham.
     * @param {DanhMucSanPhamUpdateArgs} args - Arguments to update one DanhMucSanPham.
     * @example
     * // Update one DanhMucSanPham
     * const danhMucSanPham = await prisma.danhMucSanPham.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DanhMucSanPhamUpdateArgs>(args: SelectSubset<T, DanhMucSanPhamUpdateArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DanhMucSanPhams.
     * @param {DanhMucSanPhamDeleteManyArgs} args - Arguments to filter DanhMucSanPhams to delete.
     * @example
     * // Delete a few DanhMucSanPhams
     * const { count } = await prisma.danhMucSanPham.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DanhMucSanPhamDeleteManyArgs>(args?: SelectSubset<T, DanhMucSanPhamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DanhMucSanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DanhMucSanPhams
     * const danhMucSanPham = await prisma.danhMucSanPham.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DanhMucSanPhamUpdateManyArgs>(args: SelectSubset<T, DanhMucSanPhamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DanhMucSanPham.
     * @param {DanhMucSanPhamUpsertArgs} args - Arguments to update or create a DanhMucSanPham.
     * @example
     * // Update or create a DanhMucSanPham
     * const danhMucSanPham = await prisma.danhMucSanPham.upsert({
     *   create: {
     *     // ... data to create a DanhMucSanPham
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DanhMucSanPham we want to update
     *   }
     * })
     */
    upsert<T extends DanhMucSanPhamUpsertArgs>(args: SelectSubset<T, DanhMucSanPhamUpsertArgs<ExtArgs>>): Prisma__DanhMucSanPhamClient<$Result.GetResult<Prisma.$DanhMucSanPhamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DanhMucSanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamCountArgs} args - Arguments to filter DanhMucSanPhams to count.
     * @example
     * // Count the number of DanhMucSanPhams
     * const count = await prisma.danhMucSanPham.count({
     *   where: {
     *     // ... the filter for the DanhMucSanPhams we want to count
     *   }
     * })
    **/
    count<T extends DanhMucSanPhamCountArgs>(
      args?: Subset<T, DanhMucSanPhamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DanhMucSanPhamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DanhMucSanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DanhMucSanPhamAggregateArgs>(args: Subset<T, DanhMucSanPhamAggregateArgs>): Prisma.PrismaPromise<GetDanhMucSanPhamAggregateType<T>>

    /**
     * Group by DanhMucSanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucSanPhamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DanhMucSanPhamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DanhMucSanPhamGroupByArgs['orderBy'] }
        : { orderBy?: DanhMucSanPhamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DanhMucSanPhamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDanhMucSanPhamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DanhMucSanPham model
   */
  readonly fields: DanhMucSanPhamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DanhMucSanPham.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DanhMucSanPhamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sanPhams<T extends DanhMucSanPham$sanPhamsArgs<ExtArgs> = {}>(args?: Subset<T, DanhMucSanPham$sanPhamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DanhMucSanPham model
   */
  interface DanhMucSanPhamFieldRefs {
    readonly id: FieldRef<"DanhMucSanPham", 'Int'>
    readonly tenDanhMuc: FieldRef<"DanhMucSanPham", 'String'>
    readonly moTa: FieldRef<"DanhMucSanPham", 'String'>
    readonly hoatDong: FieldRef<"DanhMucSanPham", 'Boolean'>
    readonly createdAt: FieldRef<"DanhMucSanPham", 'DateTime'>
    readonly updatedAt: FieldRef<"DanhMucSanPham", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DanhMucSanPham findUnique
   */
  export type DanhMucSanPhamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucSanPham to fetch.
     */
    where: DanhMucSanPhamWhereUniqueInput
  }

  /**
   * DanhMucSanPham findUniqueOrThrow
   */
  export type DanhMucSanPhamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucSanPham to fetch.
     */
    where: DanhMucSanPhamWhereUniqueInput
  }

  /**
   * DanhMucSanPham findFirst
   */
  export type DanhMucSanPhamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucSanPham to fetch.
     */
    where?: DanhMucSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucSanPhams to fetch.
     */
    orderBy?: DanhMucSanPhamOrderByWithRelationInput | DanhMucSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DanhMucSanPhams.
     */
    cursor?: DanhMucSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DanhMucSanPhams.
     */
    distinct?: DanhMucSanPhamScalarFieldEnum | DanhMucSanPhamScalarFieldEnum[]
  }

  /**
   * DanhMucSanPham findFirstOrThrow
   */
  export type DanhMucSanPhamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucSanPham to fetch.
     */
    where?: DanhMucSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucSanPhams to fetch.
     */
    orderBy?: DanhMucSanPhamOrderByWithRelationInput | DanhMucSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DanhMucSanPhams.
     */
    cursor?: DanhMucSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DanhMucSanPhams.
     */
    distinct?: DanhMucSanPhamScalarFieldEnum | DanhMucSanPhamScalarFieldEnum[]
  }

  /**
   * DanhMucSanPham findMany
   */
  export type DanhMucSanPhamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucSanPhams to fetch.
     */
    where?: DanhMucSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucSanPhams to fetch.
     */
    orderBy?: DanhMucSanPhamOrderByWithRelationInput | DanhMucSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DanhMucSanPhams.
     */
    cursor?: DanhMucSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DanhMucSanPhams.
     */
    distinct?: DanhMucSanPhamScalarFieldEnum | DanhMucSanPhamScalarFieldEnum[]
  }

  /**
   * DanhMucSanPham create
   */
  export type DanhMucSanPhamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * The data needed to create a DanhMucSanPham.
     */
    data: XOR<DanhMucSanPhamCreateInput, DanhMucSanPhamUncheckedCreateInput>
  }

  /**
   * DanhMucSanPham createMany
   */
  export type DanhMucSanPhamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DanhMucSanPhams.
     */
    data: DanhMucSanPhamCreateManyInput | DanhMucSanPhamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DanhMucSanPham update
   */
  export type DanhMucSanPhamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * The data needed to update a DanhMucSanPham.
     */
    data: XOR<DanhMucSanPhamUpdateInput, DanhMucSanPhamUncheckedUpdateInput>
    /**
     * Choose, which DanhMucSanPham to update.
     */
    where: DanhMucSanPhamWhereUniqueInput
  }

  /**
   * DanhMucSanPham updateMany
   */
  export type DanhMucSanPhamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DanhMucSanPhams.
     */
    data: XOR<DanhMucSanPhamUpdateManyMutationInput, DanhMucSanPhamUncheckedUpdateManyInput>
    /**
     * Filter which DanhMucSanPhams to update
     */
    where?: DanhMucSanPhamWhereInput
    /**
     * Limit how many DanhMucSanPhams to update.
     */
    limit?: number
  }

  /**
   * DanhMucSanPham upsert
   */
  export type DanhMucSanPhamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * The filter to search for the DanhMucSanPham to update in case it exists.
     */
    where: DanhMucSanPhamWhereUniqueInput
    /**
     * In case the DanhMucSanPham found by the `where` argument doesn't exist, create a new DanhMucSanPham with this data.
     */
    create: XOR<DanhMucSanPhamCreateInput, DanhMucSanPhamUncheckedCreateInput>
    /**
     * In case the DanhMucSanPham was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DanhMucSanPhamUpdateInput, DanhMucSanPhamUncheckedUpdateInput>
  }

  /**
   * DanhMucSanPham delete
   */
  export type DanhMucSanPhamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
    /**
     * Filter which DanhMucSanPham to delete.
     */
    where: DanhMucSanPhamWhereUniqueInput
  }

  /**
   * DanhMucSanPham deleteMany
   */
  export type DanhMucSanPhamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DanhMucSanPhams to delete
     */
    where?: DanhMucSanPhamWhereInput
    /**
     * Limit how many DanhMucSanPhams to delete.
     */
    limit?: number
  }

  /**
   * DanhMucSanPham.sanPhams
   */
  export type DanhMucSanPham$sanPhamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    where?: SanPhamWhereInput
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    cursor?: SanPhamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * DanhMucSanPham without action
   */
  export type DanhMucSanPhamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucSanPham
     */
    select?: DanhMucSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucSanPham
     */
    omit?: DanhMucSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucSanPhamInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpiresAt: 'resetPasswordExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SanPhamScalarFieldEnum: {
    id: 'id',
    tenSanPham: 'tenSanPham',
    moTa: 'moTa',
    gia: 'gia',
    soLuongTon: 'soLuongTon',
    danhMucId: 'danhMucId',
    hinhAnhUrl: 'hinhAnhUrl',
    hoatDong: 'hoatDong',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SanPhamScalarFieldEnum = (typeof SanPhamScalarFieldEnum)[keyof typeof SanPhamScalarFieldEnum]


  export const DanhMucSanPhamScalarFieldEnum: {
    id: 'id',
    tenDanhMuc: 'tenDanhMuc',
    moTa: 'moTa',
    hoatDong: 'hoatDong',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DanhMucSanPhamScalarFieldEnum = (typeof DanhMucSanPhamScalarFieldEnum)[keyof typeof DanhMucSanPhamScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password',
    resetPasswordToken: 'resetPasswordToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const SanPhamOrderByRelevanceFieldEnum: {
    tenSanPham: 'tenSanPham',
    moTa: 'moTa',
    hinhAnhUrl: 'hinhAnhUrl'
  };

  export type SanPhamOrderByRelevanceFieldEnum = (typeof SanPhamOrderByRelevanceFieldEnum)[keyof typeof SanPhamOrderByRelevanceFieldEnum]


  export const DanhMucSanPhamOrderByRelevanceFieldEnum: {
    tenDanhMuc: 'tenDanhMuc',
    moTa: 'moTa'
  };

  export type DanhMucSanPhamOrderByRelevanceFieldEnum = (typeof DanhMucSanPhamOrderByRelevanceFieldEnum)[keyof typeof DanhMucSanPhamOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: RoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: RoleListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type SanPhamWhereInput = {
    AND?: SanPhamWhereInput | SanPhamWhereInput[]
    OR?: SanPhamWhereInput[]
    NOT?: SanPhamWhereInput | SanPhamWhereInput[]
    id?: IntFilter<"SanPham"> | number
    tenSanPham?: StringFilter<"SanPham"> | string
    moTa?: StringNullableFilter<"SanPham"> | string | null
    gia?: DecimalFilter<"SanPham"> | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFilter<"SanPham"> | number
    danhMucId?: IntFilter<"SanPham"> | number
    hinhAnhUrl?: StringNullableFilter<"SanPham"> | string | null
    hoatDong?: BoolFilter<"SanPham"> | boolean
    createdAt?: DateTimeFilter<"SanPham"> | Date | string
    updatedAt?: DateTimeFilter<"SanPham"> | Date | string
    danhMuc?: XOR<DanhMucSanPhamScalarRelationFilter, DanhMucSanPhamWhereInput>
  }

  export type SanPhamOrderByWithRelationInput = {
    id?: SortOrder
    tenSanPham?: SortOrder
    moTa?: SortOrderInput | SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
    hinhAnhUrl?: SortOrderInput | SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    danhMuc?: DanhMucSanPhamOrderByWithRelationInput
    _relevance?: SanPhamOrderByRelevanceInput
  }

  export type SanPhamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SanPhamWhereInput | SanPhamWhereInput[]
    OR?: SanPhamWhereInput[]
    NOT?: SanPhamWhereInput | SanPhamWhereInput[]
    tenSanPham?: StringFilter<"SanPham"> | string
    moTa?: StringNullableFilter<"SanPham"> | string | null
    gia?: DecimalFilter<"SanPham"> | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFilter<"SanPham"> | number
    danhMucId?: IntFilter<"SanPham"> | number
    hinhAnhUrl?: StringNullableFilter<"SanPham"> | string | null
    hoatDong?: BoolFilter<"SanPham"> | boolean
    createdAt?: DateTimeFilter<"SanPham"> | Date | string
    updatedAt?: DateTimeFilter<"SanPham"> | Date | string
    danhMuc?: XOR<DanhMucSanPhamScalarRelationFilter, DanhMucSanPhamWhereInput>
  }, "id">

  export type SanPhamOrderByWithAggregationInput = {
    id?: SortOrder
    tenSanPham?: SortOrder
    moTa?: SortOrderInput | SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
    hinhAnhUrl?: SortOrderInput | SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SanPhamCountOrderByAggregateInput
    _avg?: SanPhamAvgOrderByAggregateInput
    _max?: SanPhamMaxOrderByAggregateInput
    _min?: SanPhamMinOrderByAggregateInput
    _sum?: SanPhamSumOrderByAggregateInput
  }

  export type SanPhamScalarWhereWithAggregatesInput = {
    AND?: SanPhamScalarWhereWithAggregatesInput | SanPhamScalarWhereWithAggregatesInput[]
    OR?: SanPhamScalarWhereWithAggregatesInput[]
    NOT?: SanPhamScalarWhereWithAggregatesInput | SanPhamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SanPham"> | number
    tenSanPham?: StringWithAggregatesFilter<"SanPham"> | string
    moTa?: StringNullableWithAggregatesFilter<"SanPham"> | string | null
    gia?: DecimalWithAggregatesFilter<"SanPham"> | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntWithAggregatesFilter<"SanPham"> | number
    danhMucId?: IntWithAggregatesFilter<"SanPham"> | number
    hinhAnhUrl?: StringNullableWithAggregatesFilter<"SanPham"> | string | null
    hoatDong?: BoolWithAggregatesFilter<"SanPham"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SanPham"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SanPham"> | Date | string
  }

  export type DanhMucSanPhamWhereInput = {
    AND?: DanhMucSanPhamWhereInput | DanhMucSanPhamWhereInput[]
    OR?: DanhMucSanPhamWhereInput[]
    NOT?: DanhMucSanPhamWhereInput | DanhMucSanPhamWhereInput[]
    id?: IntFilter<"DanhMucSanPham"> | number
    tenDanhMuc?: StringFilter<"DanhMucSanPham"> | string
    moTa?: StringNullableFilter<"DanhMucSanPham"> | string | null
    hoatDong?: BoolFilter<"DanhMucSanPham"> | boolean
    createdAt?: DateTimeFilter<"DanhMucSanPham"> | Date | string
    updatedAt?: DateTimeFilter<"DanhMucSanPham"> | Date | string
    sanPhams?: SanPhamListRelationFilter
  }

  export type DanhMucSanPhamOrderByWithRelationInput = {
    id?: SortOrder
    tenDanhMuc?: SortOrder
    moTa?: SortOrderInput | SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sanPhams?: SanPhamOrderByRelationAggregateInput
    _relevance?: DanhMucSanPhamOrderByRelevanceInput
  }

  export type DanhMucSanPhamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tenDanhMuc?: string
    AND?: DanhMucSanPhamWhereInput | DanhMucSanPhamWhereInput[]
    OR?: DanhMucSanPhamWhereInput[]
    NOT?: DanhMucSanPhamWhereInput | DanhMucSanPhamWhereInput[]
    moTa?: StringNullableFilter<"DanhMucSanPham"> | string | null
    hoatDong?: BoolFilter<"DanhMucSanPham"> | boolean
    createdAt?: DateTimeFilter<"DanhMucSanPham"> | Date | string
    updatedAt?: DateTimeFilter<"DanhMucSanPham"> | Date | string
    sanPhams?: SanPhamListRelationFilter
  }, "id" | "tenDanhMuc">

  export type DanhMucSanPhamOrderByWithAggregationInput = {
    id?: SortOrder
    tenDanhMuc?: SortOrder
    moTa?: SortOrderInput | SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DanhMucSanPhamCountOrderByAggregateInput
    _avg?: DanhMucSanPhamAvgOrderByAggregateInput
    _max?: DanhMucSanPhamMaxOrderByAggregateInput
    _min?: DanhMucSanPhamMinOrderByAggregateInput
    _sum?: DanhMucSanPhamSumOrderByAggregateInput
  }

  export type DanhMucSanPhamScalarWhereWithAggregatesInput = {
    AND?: DanhMucSanPhamScalarWhereWithAggregatesInput | DanhMucSanPhamScalarWhereWithAggregatesInput[]
    OR?: DanhMucSanPhamScalarWhereWithAggregatesInput[]
    NOT?: DanhMucSanPhamScalarWhereWithAggregatesInput | DanhMucSanPhamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DanhMucSanPham"> | number
    tenDanhMuc?: StringWithAggregatesFilter<"DanhMucSanPham"> | string
    moTa?: StringNullableWithAggregatesFilter<"DanhMucSanPham"> | string | null
    hoatDong?: BoolWithAggregatesFilter<"DanhMucSanPham"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DanhMucSanPham"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DanhMucSanPham"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email?: string | null
    password: string
    resetPasswordToken?: string | null
    resetPasswordExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    resetPasswordToken?: string | null
    resetPasswordExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    resetPasswordToken?: string | null
    resetPasswordExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SanPhamCreateInput = {
    tenSanPham: string
    moTa?: string | null
    gia: Decimal | DecimalJsLike | number | string
    soLuongTon?: number
    hinhAnhUrl?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    danhMuc: DanhMucSanPhamCreateNestedOneWithoutSanPhamsInput
  }

  export type SanPhamUncheckedCreateInput = {
    id?: number
    tenSanPham: string
    moTa?: string | null
    gia: Decimal | DecimalJsLike | number | string
    soLuongTon?: number
    danhMucId: number
    hinhAnhUrl?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SanPhamUpdateInput = {
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    danhMuc?: DanhMucSanPhamUpdateOneRequiredWithoutSanPhamsNestedInput
  }

  export type SanPhamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    danhMucId?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanPhamCreateManyInput = {
    id?: number
    tenSanPham: string
    moTa?: string | null
    gia: Decimal | DecimalJsLike | number | string
    soLuongTon?: number
    danhMucId: number
    hinhAnhUrl?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SanPhamUpdateManyMutationInput = {
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanPhamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    danhMucId?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DanhMucSanPhamCreateInput = {
    tenDanhMuc: string
    moTa?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sanPhams?: SanPhamCreateNestedManyWithoutDanhMucInput
  }

  export type DanhMucSanPhamUncheckedCreateInput = {
    id?: number
    tenDanhMuc: string
    moTa?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sanPhams?: SanPhamUncheckedCreateNestedManyWithoutDanhMucInput
  }

  export type DanhMucSanPhamUpdateInput = {
    tenDanhMuc?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sanPhams?: SanPhamUpdateManyWithoutDanhMucNestedInput
  }

  export type DanhMucSanPhamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenDanhMuc?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sanPhams?: SanPhamUncheckedUpdateManyWithoutDanhMucNestedInput
  }

  export type DanhMucSanPhamCreateManyInput = {
    id?: number
    tenDanhMuc: string
    moTa?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DanhMucSanPhamUpdateManyMutationInput = {
    tenDanhMuc?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DanhMucSanPhamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenDanhMuc?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DanhMucSanPhamScalarRelationFilter = {
    is?: DanhMucSanPhamWhereInput
    isNot?: DanhMucSanPhamWhereInput
  }

  export type SanPhamOrderByRelevanceInput = {
    fields: SanPhamOrderByRelevanceFieldEnum | SanPhamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SanPhamCountOrderByAggregateInput = {
    id?: SortOrder
    tenSanPham?: SortOrder
    moTa?: SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
    hinhAnhUrl?: SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SanPhamAvgOrderByAggregateInput = {
    id?: SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
  }

  export type SanPhamMaxOrderByAggregateInput = {
    id?: SortOrder
    tenSanPham?: SortOrder
    moTa?: SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
    hinhAnhUrl?: SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SanPhamMinOrderByAggregateInput = {
    id?: SortOrder
    tenSanPham?: SortOrder
    moTa?: SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
    hinhAnhUrl?: SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SanPhamSumOrderByAggregateInput = {
    id?: SortOrder
    gia?: SortOrder
    soLuongTon?: SortOrder
    danhMucId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SanPhamListRelationFilter = {
    every?: SanPhamWhereInput
    some?: SanPhamWhereInput
    none?: SanPhamWhereInput
  }

  export type SanPhamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DanhMucSanPhamOrderByRelevanceInput = {
    fields: DanhMucSanPhamOrderByRelevanceFieldEnum | DanhMucSanPhamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DanhMucSanPhamCountOrderByAggregateInput = {
    id?: SortOrder
    tenDanhMuc?: SortOrder
    moTa?: SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DanhMucSanPhamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DanhMucSanPhamMaxOrderByAggregateInput = {
    id?: SortOrder
    tenDanhMuc?: SortOrder
    moTa?: SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DanhMucSanPhamMinOrderByAggregateInput = {
    id?: SortOrder
    tenDanhMuc?: SortOrder
    moTa?: SortOrder
    hoatDong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DanhMucSanPhamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DanhMucSanPhamCreateNestedOneWithoutSanPhamsInput = {
    create?: XOR<DanhMucSanPhamCreateWithoutSanPhamsInput, DanhMucSanPhamUncheckedCreateWithoutSanPhamsInput>
    connectOrCreate?: DanhMucSanPhamCreateOrConnectWithoutSanPhamsInput
    connect?: DanhMucSanPhamWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DanhMucSanPhamUpdateOneRequiredWithoutSanPhamsNestedInput = {
    create?: XOR<DanhMucSanPhamCreateWithoutSanPhamsInput, DanhMucSanPhamUncheckedCreateWithoutSanPhamsInput>
    connectOrCreate?: DanhMucSanPhamCreateOrConnectWithoutSanPhamsInput
    upsert?: DanhMucSanPhamUpsertWithoutSanPhamsInput
    connect?: DanhMucSanPhamWhereUniqueInput
    update?: XOR<XOR<DanhMucSanPhamUpdateToOneWithWhereWithoutSanPhamsInput, DanhMucSanPhamUpdateWithoutSanPhamsInput>, DanhMucSanPhamUncheckedUpdateWithoutSanPhamsInput>
  }

  export type SanPhamCreateNestedManyWithoutDanhMucInput = {
    create?: XOR<SanPhamCreateWithoutDanhMucInput, SanPhamUncheckedCreateWithoutDanhMucInput> | SanPhamCreateWithoutDanhMucInput[] | SanPhamUncheckedCreateWithoutDanhMucInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutDanhMucInput | SanPhamCreateOrConnectWithoutDanhMucInput[]
    createMany?: SanPhamCreateManyDanhMucInputEnvelope
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
  }

  export type SanPhamUncheckedCreateNestedManyWithoutDanhMucInput = {
    create?: XOR<SanPhamCreateWithoutDanhMucInput, SanPhamUncheckedCreateWithoutDanhMucInput> | SanPhamCreateWithoutDanhMucInput[] | SanPhamUncheckedCreateWithoutDanhMucInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutDanhMucInput | SanPhamCreateOrConnectWithoutDanhMucInput[]
    createMany?: SanPhamCreateManyDanhMucInputEnvelope
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
  }

  export type SanPhamUpdateManyWithoutDanhMucNestedInput = {
    create?: XOR<SanPhamCreateWithoutDanhMucInput, SanPhamUncheckedCreateWithoutDanhMucInput> | SanPhamCreateWithoutDanhMucInput[] | SanPhamUncheckedCreateWithoutDanhMucInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutDanhMucInput | SanPhamCreateOrConnectWithoutDanhMucInput[]
    upsert?: SanPhamUpsertWithWhereUniqueWithoutDanhMucInput | SanPhamUpsertWithWhereUniqueWithoutDanhMucInput[]
    createMany?: SanPhamCreateManyDanhMucInputEnvelope
    set?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    disconnect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    delete?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    update?: SanPhamUpdateWithWhereUniqueWithoutDanhMucInput | SanPhamUpdateWithWhereUniqueWithoutDanhMucInput[]
    updateMany?: SanPhamUpdateManyWithWhereWithoutDanhMucInput | SanPhamUpdateManyWithWhereWithoutDanhMucInput[]
    deleteMany?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
  }

  export type SanPhamUncheckedUpdateManyWithoutDanhMucNestedInput = {
    create?: XOR<SanPhamCreateWithoutDanhMucInput, SanPhamUncheckedCreateWithoutDanhMucInput> | SanPhamCreateWithoutDanhMucInput[] | SanPhamUncheckedCreateWithoutDanhMucInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutDanhMucInput | SanPhamCreateOrConnectWithoutDanhMucInput[]
    upsert?: SanPhamUpsertWithWhereUniqueWithoutDanhMucInput | SanPhamUpsertWithWhereUniqueWithoutDanhMucInput[]
    createMany?: SanPhamCreateManyDanhMucInputEnvelope
    set?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    disconnect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    delete?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    update?: SanPhamUpdateWithWhereUniqueWithoutDanhMucInput | SanPhamUpdateWithWhereUniqueWithoutDanhMucInput[]
    updateMany?: SanPhamUpdateManyWithWhereWithoutDanhMucInput | SanPhamUpdateManyWithWhereWithoutDanhMucInput[]
    deleteMany?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
  }

  export type UserCreateWithoutRolesInput = {
    username: string
    email?: string | null
    password: string
    resetPasswordToken?: string | null
    resetPasswordExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    email?: string | null
    password: string
    resetPasswordToken?: string | null
    resetPasswordExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type DanhMucSanPhamCreateWithoutSanPhamsInput = {
    tenDanhMuc: string
    moTa?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DanhMucSanPhamUncheckedCreateWithoutSanPhamsInput = {
    id?: number
    tenDanhMuc: string
    moTa?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DanhMucSanPhamCreateOrConnectWithoutSanPhamsInput = {
    where: DanhMucSanPhamWhereUniqueInput
    create: XOR<DanhMucSanPhamCreateWithoutSanPhamsInput, DanhMucSanPhamUncheckedCreateWithoutSanPhamsInput>
  }

  export type DanhMucSanPhamUpsertWithoutSanPhamsInput = {
    update: XOR<DanhMucSanPhamUpdateWithoutSanPhamsInput, DanhMucSanPhamUncheckedUpdateWithoutSanPhamsInput>
    create: XOR<DanhMucSanPhamCreateWithoutSanPhamsInput, DanhMucSanPhamUncheckedCreateWithoutSanPhamsInput>
    where?: DanhMucSanPhamWhereInput
  }

  export type DanhMucSanPhamUpdateToOneWithWhereWithoutSanPhamsInput = {
    where?: DanhMucSanPhamWhereInput
    data: XOR<DanhMucSanPhamUpdateWithoutSanPhamsInput, DanhMucSanPhamUncheckedUpdateWithoutSanPhamsInput>
  }

  export type DanhMucSanPhamUpdateWithoutSanPhamsInput = {
    tenDanhMuc?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DanhMucSanPhamUncheckedUpdateWithoutSanPhamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenDanhMuc?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanPhamCreateWithoutDanhMucInput = {
    tenSanPham: string
    moTa?: string | null
    gia: Decimal | DecimalJsLike | number | string
    soLuongTon?: number
    hinhAnhUrl?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SanPhamUncheckedCreateWithoutDanhMucInput = {
    id?: number
    tenSanPham: string
    moTa?: string | null
    gia: Decimal | DecimalJsLike | number | string
    soLuongTon?: number
    hinhAnhUrl?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SanPhamCreateOrConnectWithoutDanhMucInput = {
    where: SanPhamWhereUniqueInput
    create: XOR<SanPhamCreateWithoutDanhMucInput, SanPhamUncheckedCreateWithoutDanhMucInput>
  }

  export type SanPhamCreateManyDanhMucInputEnvelope = {
    data: SanPhamCreateManyDanhMucInput | SanPhamCreateManyDanhMucInput[]
    skipDuplicates?: boolean
  }

  export type SanPhamUpsertWithWhereUniqueWithoutDanhMucInput = {
    where: SanPhamWhereUniqueInput
    update: XOR<SanPhamUpdateWithoutDanhMucInput, SanPhamUncheckedUpdateWithoutDanhMucInput>
    create: XOR<SanPhamCreateWithoutDanhMucInput, SanPhamUncheckedCreateWithoutDanhMucInput>
  }

  export type SanPhamUpdateWithWhereUniqueWithoutDanhMucInput = {
    where: SanPhamWhereUniqueInput
    data: XOR<SanPhamUpdateWithoutDanhMucInput, SanPhamUncheckedUpdateWithoutDanhMucInput>
  }

  export type SanPhamUpdateManyWithWhereWithoutDanhMucInput = {
    where: SanPhamScalarWhereInput
    data: XOR<SanPhamUpdateManyMutationInput, SanPhamUncheckedUpdateManyWithoutDanhMucInput>
  }

  export type SanPhamScalarWhereInput = {
    AND?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
    OR?: SanPhamScalarWhereInput[]
    NOT?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
    id?: IntFilter<"SanPham"> | number
    tenSanPham?: StringFilter<"SanPham"> | string
    moTa?: StringNullableFilter<"SanPham"> | string | null
    gia?: DecimalFilter<"SanPham"> | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFilter<"SanPham"> | number
    danhMucId?: IntFilter<"SanPham"> | number
    hinhAnhUrl?: StringNullableFilter<"SanPham"> | string | null
    hoatDong?: BoolFilter<"SanPham"> | boolean
    createdAt?: DateTimeFilter<"SanPham"> | Date | string
    updatedAt?: DateTimeFilter<"SanPham"> | Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanPhamCreateManyDanhMucInput = {
    id?: number
    tenSanPham: string
    moTa?: string | null
    gia: Decimal | DecimalJsLike | number | string
    soLuongTon?: number
    hinhAnhUrl?: string | null
    hoatDong?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SanPhamUpdateWithoutDanhMucInput = {
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanPhamUncheckedUpdateWithoutDanhMucInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanPhamUncheckedUpdateManyWithoutDanhMucInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenSanPham?: StringFieldUpdateOperationsInput | string
    moTa?: NullableStringFieldUpdateOperationsInput | string | null
    gia?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    soLuongTon?: IntFieldUpdateOperationsInput | number
    hinhAnhUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hoatDong?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}