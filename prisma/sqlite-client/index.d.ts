
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Voluntario
 * 
 */
export type Voluntario = $Result.DefaultSelection<Prisma.$VoluntarioPayload>
/**
 * Model Ong
 * 
 */
export type Ong = $Result.DefaultSelection<Prisma.$OngPayload>
/**
 * Model Vaga
 * 
 */
export type Vaga = $Result.DefaultSelection<Prisma.$VagaPayload>
/**
 * Model Inscricao
 * 
 */
export type Inscricao = $Result.DefaultSelection<Prisma.$InscricaoPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.voluntario`: Exposes CRUD operations for the **Voluntario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voluntarios
    * const voluntarios = await prisma.voluntario.findMany()
    * ```
    */
  get voluntario(): Prisma.VoluntarioDelegate<ExtArgs>;

  /**
   * `prisma.ong`: Exposes CRUD operations for the **Ong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ongs
    * const ongs = await prisma.ong.findMany()
    * ```
    */
  get ong(): Prisma.OngDelegate<ExtArgs>;

  /**
   * `prisma.vaga`: Exposes CRUD operations for the **Vaga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vagas
    * const vagas = await prisma.vaga.findMany()
    * ```
    */
  get vaga(): Prisma.VagaDelegate<ExtArgs>;

  /**
   * `prisma.inscricao`: Exposes CRUD operations for the **Inscricao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscricaos
    * const inscricaos = await prisma.inscricao.findMany()
    * ```
    */
  get inscricao(): Prisma.InscricaoDelegate<ExtArgs>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs>;
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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Voluntario: 'Voluntario',
    Ong: 'Ong',
    Vaga: 'Vaga',
    Inscricao: 'Inscricao',
    Avaliacao: 'Avaliacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "voluntario" | "ong" | "vaga" | "inscricao" | "avaliacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Voluntario: {
        payload: Prisma.$VoluntarioPayload<ExtArgs>
        fields: Prisma.VoluntarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoluntarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoluntarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          findFirst: {
            args: Prisma.VoluntarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoluntarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          findMany: {
            args: Prisma.VoluntarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          create: {
            args: Prisma.VoluntarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          createMany: {
            args: Prisma.VoluntarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoluntarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>[]
          }
          delete: {
            args: Prisma.VoluntarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          update: {
            args: Prisma.VoluntarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          deleteMany: {
            args: Prisma.VoluntarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoluntarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoluntarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoluntarioPayload>
          }
          aggregate: {
            args: Prisma.VoluntarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoluntario>
          }
          groupBy: {
            args: Prisma.VoluntarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoluntarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoluntarioCountArgs<ExtArgs>
            result: $Utils.Optional<VoluntarioCountAggregateOutputType> | number
          }
        }
      }
      Ong: {
        payload: Prisma.$OngPayload<ExtArgs>
        fields: Prisma.OngFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OngFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OngFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findFirst: {
            args: Prisma.OngFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OngFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findMany: {
            args: Prisma.OngFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          create: {
            args: Prisma.OngCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          createMany: {
            args: Prisma.OngCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OngCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          delete: {
            args: Prisma.OngDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          update: {
            args: Prisma.OngUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          deleteMany: {
            args: Prisma.OngDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OngUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OngUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          aggregate: {
            args: Prisma.OngAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOng>
          }
          groupBy: {
            args: Prisma.OngGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngGroupByOutputType>[]
          }
          count: {
            args: Prisma.OngCountArgs<ExtArgs>
            result: $Utils.Optional<OngCountAggregateOutputType> | number
          }
        }
      }
      Vaga: {
        payload: Prisma.$VagaPayload<ExtArgs>
        fields: Prisma.VagaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VagaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VagaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          findFirst: {
            args: Prisma.VagaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VagaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          findMany: {
            args: Prisma.VagaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>[]
          }
          create: {
            args: Prisma.VagaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          createMany: {
            args: Prisma.VagaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VagaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>[]
          }
          delete: {
            args: Prisma.VagaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          update: {
            args: Prisma.VagaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          deleteMany: {
            args: Prisma.VagaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VagaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VagaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VagaPayload>
          }
          aggregate: {
            args: Prisma.VagaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaga>
          }
          groupBy: {
            args: Prisma.VagaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VagaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VagaCountArgs<ExtArgs>
            result: $Utils.Optional<VagaCountAggregateOutputType> | number
          }
        }
      }
      Inscricao: {
        payload: Prisma.$InscricaoPayload<ExtArgs>
        fields: Prisma.InscricaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscricaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscricaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findFirst: {
            args: Prisma.InscricaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscricaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          findMany: {
            args: Prisma.InscricaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          create: {
            args: Prisma.InscricaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          createMany: {
            args: Prisma.InscricaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscricaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>[]
          }
          delete: {
            args: Prisma.InscricaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          update: {
            args: Prisma.InscricaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          deleteMany: {
            args: Prisma.InscricaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscricaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InscricaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscricaoPayload>
          }
          aggregate: {
            args: Prisma.InscricaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscricao>
          }
          groupBy: {
            args: Prisma.InscricaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscricaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscricaoCountArgs<ExtArgs>
            result: $Utils.Optional<InscricaoCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type VoluntarioCountOutputType
   */

  export type VoluntarioCountOutputType = {
    inscricoes: number
    avaliacao: number
  }

  export type VoluntarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | VoluntarioCountOutputTypeCountInscricoesArgs
    avaliacao?: boolean | VoluntarioCountOutputTypeCountAvaliacaoArgs
  }

  // Custom InputTypes
  /**
   * VoluntarioCountOutputType without action
   */
  export type VoluntarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoluntarioCountOutputType
     */
    select?: VoluntarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoluntarioCountOutputType without action
   */
  export type VoluntarioCountOutputTypeCountInscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }

  /**
   * VoluntarioCountOutputType without action
   */
  export type VoluntarioCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type OngCountOutputType
   */

  export type OngCountOutputType = {
    vagas: number
    avaliacao: number
  }

  export type OngCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vagas?: boolean | OngCountOutputTypeCountVagasArgs
    avaliacao?: boolean | OngCountOutputTypeCountAvaliacaoArgs
  }

  // Custom InputTypes
  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngCountOutputType
     */
    select?: OngCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeCountVagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagaWhereInput
  }

  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type VagaCountOutputType
   */

  export type VagaCountOutputType = {
    inscricoes: number
  }

  export type VagaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscricoes?: boolean | VagaCountOutputTypeCountInscricoesArgs
  }

  // Custom InputTypes
  /**
   * VagaCountOutputType without action
   */
  export type VagaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VagaCountOutputType
     */
    select?: VagaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VagaCountOutputType without action
   */
  export type VagaCountOutputTypeCountInscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    imagem: string | null
    tipo: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    imagem: string | null
    tipo: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    imagem: number
    tipo: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    imagem?: true
    tipo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    imagem?: true
    tipo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    imagem?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    imagem: string | null
    tipo: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    imagem?: boolean
    tipo?: boolean
    voluntario?: boolean | Usuario$voluntarioArgs<ExtArgs>
    ong?: boolean | Usuario$ongArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    imagem?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    imagem?: boolean
    tipo?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | Usuario$voluntarioArgs<ExtArgs>
    ong?: boolean | Usuario$ongArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      voluntario: Prisma.$VoluntarioPayload<ExtArgs> | null
      ong: Prisma.$OngPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      imagem: string | null
      tipo: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voluntario<T extends Usuario$voluntarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$voluntarioArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    ong<T extends Usuario$ongArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ongArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly imagem: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.voluntario
   */
  export type Usuario$voluntarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    where?: VoluntarioWhereInput
  }

  /**
   * Usuario.ong
   */
  export type Usuario$ongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    where?: OngWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Voluntario
   */

  export type AggregateVoluntario = {
    _count: VoluntarioCountAggregateOutputType | null
    _min: VoluntarioMinAggregateOutputType | null
    _max: VoluntarioMaxAggregateOutputType | null
  }

  export type VoluntarioMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    interesses: string | null
    habilidades: string | null
    disponibilidade: string | null
  }

  export type VoluntarioMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    interesses: string | null
    habilidades: string | null
    disponibilidade: string | null
  }

  export type VoluntarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    interesses: number
    habilidades: number
    disponibilidade: number
    _all: number
  }


  export type VoluntarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    interesses?: true
    habilidades?: true
    disponibilidade?: true
  }

  export type VoluntarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    interesses?: true
    habilidades?: true
    disponibilidade?: true
  }

  export type VoluntarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    interesses?: true
    habilidades?: true
    disponibilidade?: true
    _all?: true
  }

  export type VoluntarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voluntario to aggregate.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voluntarios
    **/
    _count?: true | VoluntarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoluntarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoluntarioMaxAggregateInputType
  }

  export type GetVoluntarioAggregateType<T extends VoluntarioAggregateArgs> = {
        [P in keyof T & keyof AggregateVoluntario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoluntario[P]>
      : GetScalarType<T[P], AggregateVoluntario[P]>
  }




  export type VoluntarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoluntarioWhereInput
    orderBy?: VoluntarioOrderByWithAggregationInput | VoluntarioOrderByWithAggregationInput[]
    by: VoluntarioScalarFieldEnum[] | VoluntarioScalarFieldEnum
    having?: VoluntarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoluntarioCountAggregateInputType | true
    _min?: VoluntarioMinAggregateInputType
    _max?: VoluntarioMaxAggregateInputType
  }

  export type VoluntarioGroupByOutputType = {
    id: string
    usuarioId: string
    interesses: string
    habilidades: string
    disponibilidade: string
    _count: VoluntarioCountAggregateOutputType | null
    _min: VoluntarioMinAggregateOutputType | null
    _max: VoluntarioMaxAggregateOutputType | null
  }

  type GetVoluntarioGroupByPayload<T extends VoluntarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoluntarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoluntarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoluntarioGroupByOutputType[P]>
            : GetScalarType<T[P], VoluntarioGroupByOutputType[P]>
        }
      >
    >


  export type VoluntarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    interesses?: boolean
    habilidades?: boolean
    disponibilidade?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    inscricoes?: boolean | Voluntario$inscricoesArgs<ExtArgs>
    avaliacao?: boolean | Voluntario$avaliacaoArgs<ExtArgs>
    _count?: boolean | VoluntarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    interesses?: boolean
    habilidades?: boolean
    disponibilidade?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voluntario"]>

  export type VoluntarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    interesses?: boolean
    habilidades?: boolean
    disponibilidade?: boolean
  }

  export type VoluntarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    inscricoes?: boolean | Voluntario$inscricoesArgs<ExtArgs>
    avaliacao?: boolean | Voluntario$avaliacaoArgs<ExtArgs>
    _count?: boolean | VoluntarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoluntarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VoluntarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voluntario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      inscricoes: Prisma.$InscricaoPayload<ExtArgs>[]
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      interesses: string
      habilidades: string
      disponibilidade: string
    }, ExtArgs["result"]["voluntario"]>
    composites: {}
  }

  type VoluntarioGetPayload<S extends boolean | null | undefined | VoluntarioDefaultArgs> = $Result.GetResult<Prisma.$VoluntarioPayload, S>

  type VoluntarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VoluntarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VoluntarioCountAggregateInputType | true
    }

  export interface VoluntarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voluntario'], meta: { name: 'Voluntario' } }
    /**
     * Find zero or one Voluntario that matches the filter.
     * @param {VoluntarioFindUniqueArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoluntarioFindUniqueArgs>(args: SelectSubset<T, VoluntarioFindUniqueArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Voluntario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VoluntarioFindUniqueOrThrowArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoluntarioFindUniqueOrThrowArgs>(args: SelectSubset<T, VoluntarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Voluntario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindFirstArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoluntarioFindFirstArgs>(args?: SelectSubset<T, VoluntarioFindFirstArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Voluntario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindFirstOrThrowArgs} args - Arguments to find a Voluntario
     * @example
     * // Get one Voluntario
     * const voluntario = await prisma.voluntario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoluntarioFindFirstOrThrowArgs>(args?: SelectSubset<T, VoluntarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voluntarios
     * const voluntarios = await prisma.voluntario.findMany()
     * 
     * // Get first 10 Voluntarios
     * const voluntarios = await prisma.voluntario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voluntarioWithIdOnly = await prisma.voluntario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoluntarioFindManyArgs>(args?: SelectSubset<T, VoluntarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Voluntario.
     * @param {VoluntarioCreateArgs} args - Arguments to create a Voluntario.
     * @example
     * // Create one Voluntario
     * const Voluntario = await prisma.voluntario.create({
     *   data: {
     *     // ... data to create a Voluntario
     *   }
     * })
     * 
     */
    create<T extends VoluntarioCreateArgs>(args: SelectSubset<T, VoluntarioCreateArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Voluntarios.
     * @param {VoluntarioCreateManyArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntario = await prisma.voluntario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoluntarioCreateManyArgs>(args?: SelectSubset<T, VoluntarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voluntarios and returns the data saved in the database.
     * @param {VoluntarioCreateManyAndReturnArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntario = await prisma.voluntario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voluntarios and only return the `id`
     * const voluntarioWithIdOnly = await prisma.voluntario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoluntarioCreateManyAndReturnArgs>(args?: SelectSubset<T, VoluntarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Voluntario.
     * @param {VoluntarioDeleteArgs} args - Arguments to delete one Voluntario.
     * @example
     * // Delete one Voluntario
     * const Voluntario = await prisma.voluntario.delete({
     *   where: {
     *     // ... filter to delete one Voluntario
     *   }
     * })
     * 
     */
    delete<T extends VoluntarioDeleteArgs>(args: SelectSubset<T, VoluntarioDeleteArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Voluntario.
     * @param {VoluntarioUpdateArgs} args - Arguments to update one Voluntario.
     * @example
     * // Update one Voluntario
     * const voluntario = await prisma.voluntario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoluntarioUpdateArgs>(args: SelectSubset<T, VoluntarioUpdateArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Voluntarios.
     * @param {VoluntarioDeleteManyArgs} args - Arguments to filter Voluntarios to delete.
     * @example
     * // Delete a few Voluntarios
     * const { count } = await prisma.voluntario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoluntarioDeleteManyArgs>(args?: SelectSubset<T, VoluntarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voluntarios
     * const voluntario = await prisma.voluntario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoluntarioUpdateManyArgs>(args: SelectSubset<T, VoluntarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voluntario.
     * @param {VoluntarioUpsertArgs} args - Arguments to update or create a Voluntario.
     * @example
     * // Update or create a Voluntario
     * const voluntario = await prisma.voluntario.upsert({
     *   create: {
     *     // ... data to create a Voluntario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voluntario we want to update
     *   }
     * })
     */
    upsert<T extends VoluntarioUpsertArgs>(args: SelectSubset<T, VoluntarioUpsertArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioCountArgs} args - Arguments to filter Voluntarios to count.
     * @example
     * // Count the number of Voluntarios
     * const count = await prisma.voluntario.count({
     *   where: {
     *     // ... the filter for the Voluntarios we want to count
     *   }
     * })
    **/
    count<T extends VoluntarioCountArgs>(
      args?: Subset<T, VoluntarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoluntarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voluntario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoluntarioAggregateArgs>(args: Subset<T, VoluntarioAggregateArgs>): Prisma.PrismaPromise<GetVoluntarioAggregateType<T>>

    /**
     * Group by Voluntario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntarioGroupByArgs} args - Group by arguments.
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
      T extends VoluntarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoluntarioGroupByArgs['orderBy'] }
        : { orderBy?: VoluntarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoluntarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoluntarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voluntario model
   */
  readonly fields: VoluntarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voluntario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoluntarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inscricoes<T extends Voluntario$inscricoesArgs<ExtArgs> = {}>(args?: Subset<T, Voluntario$inscricoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacao<T extends Voluntario$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Voluntario$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Voluntario model
   */ 
  interface VoluntarioFieldRefs {
    readonly id: FieldRef<"Voluntario", 'String'>
    readonly usuarioId: FieldRef<"Voluntario", 'String'>
    readonly interesses: FieldRef<"Voluntario", 'String'>
    readonly habilidades: FieldRef<"Voluntario", 'String'>
    readonly disponibilidade: FieldRef<"Voluntario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Voluntario findUnique
   */
  export type VoluntarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario findUniqueOrThrow
   */
  export type VoluntarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario findFirst
   */
  export type VoluntarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voluntarios.
     */
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario findFirstOrThrow
   */
  export type VoluntarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntario to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voluntarios.
     */
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario findMany
   */
  export type VoluntarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter, which Voluntarios to fetch.
     */
    where?: VoluntarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voluntarios to fetch.
     */
    orderBy?: VoluntarioOrderByWithRelationInput | VoluntarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voluntarios.
     */
    cursor?: VoluntarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voluntarios.
     */
    skip?: number
    distinct?: VoluntarioScalarFieldEnum | VoluntarioScalarFieldEnum[]
  }

  /**
   * Voluntario create
   */
  export type VoluntarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Voluntario.
     */
    data: XOR<VoluntarioCreateInput, VoluntarioUncheckedCreateInput>
  }

  /**
   * Voluntario createMany
   */
  export type VoluntarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voluntarios.
     */
    data: VoluntarioCreateManyInput | VoluntarioCreateManyInput[]
  }

  /**
   * Voluntario createManyAndReturn
   */
  export type VoluntarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Voluntarios.
     */
    data: VoluntarioCreateManyInput | VoluntarioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voluntario update
   */
  export type VoluntarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Voluntario.
     */
    data: XOR<VoluntarioUpdateInput, VoluntarioUncheckedUpdateInput>
    /**
     * Choose, which Voluntario to update.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario updateMany
   */
  export type VoluntarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voluntarios.
     */
    data: XOR<VoluntarioUpdateManyMutationInput, VoluntarioUncheckedUpdateManyInput>
    /**
     * Filter which Voluntarios to update
     */
    where?: VoluntarioWhereInput
  }

  /**
   * Voluntario upsert
   */
  export type VoluntarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Voluntario to update in case it exists.
     */
    where: VoluntarioWhereUniqueInput
    /**
     * In case the Voluntario found by the `where` argument doesn't exist, create a new Voluntario with this data.
     */
    create: XOR<VoluntarioCreateInput, VoluntarioUncheckedCreateInput>
    /**
     * In case the Voluntario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoluntarioUpdateInput, VoluntarioUncheckedUpdateInput>
  }

  /**
   * Voluntario delete
   */
  export type VoluntarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
    /**
     * Filter which Voluntario to delete.
     */
    where: VoluntarioWhereUniqueInput
  }

  /**
   * Voluntario deleteMany
   */
  export type VoluntarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voluntarios to delete
     */
    where?: VoluntarioWhereInput
  }

  /**
   * Voluntario.inscricoes
   */
  export type Voluntario$inscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Voluntario.avaliacao
   */
  export type Voluntario$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Voluntario without action
   */
  export type VoluntarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voluntario
     */
    select?: VoluntarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoluntarioInclude<ExtArgs> | null
  }


  /**
   * Model Ong
   */

  export type AggregateOng = {
    _count: OngCountAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  export type OngMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    cnpj: string | null
    descricao: string | null
    visao: string | null
    areaAtuacao: string | null
    endereco: string | null
  }

  export type OngMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    cnpj: string | null
    descricao: string | null
    visao: string | null
    areaAtuacao: string | null
    endereco: string | null
  }

  export type OngCountAggregateOutputType = {
    id: number
    usuarioId: number
    cnpj: number
    descricao: number
    visao: number
    areaAtuacao: number
    endereco: number
    _all: number
  }


  export type OngMinAggregateInputType = {
    id?: true
    usuarioId?: true
    cnpj?: true
    descricao?: true
    visao?: true
    areaAtuacao?: true
    endereco?: true
  }

  export type OngMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    cnpj?: true
    descricao?: true
    visao?: true
    areaAtuacao?: true
    endereco?: true
  }

  export type OngCountAggregateInputType = {
    id?: true
    usuarioId?: true
    cnpj?: true
    descricao?: true
    visao?: true
    areaAtuacao?: true
    endereco?: true
    _all?: true
  }

  export type OngAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ong to aggregate.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ongs
    **/
    _count?: true | OngCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngMaxAggregateInputType
  }

  export type GetOngAggregateType<T extends OngAggregateArgs> = {
        [P in keyof T & keyof AggregateOng]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOng[P]>
      : GetScalarType<T[P], AggregateOng[P]>
  }




  export type OngGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngWhereInput
    orderBy?: OngOrderByWithAggregationInput | OngOrderByWithAggregationInput[]
    by: OngScalarFieldEnum[] | OngScalarFieldEnum
    having?: OngScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngCountAggregateInputType | true
    _min?: OngMinAggregateInputType
    _max?: OngMaxAggregateInputType
  }

  export type OngGroupByOutputType = {
    id: string
    usuarioId: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    _count: OngCountAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  type GetOngGroupByPayload<T extends OngGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngGroupByOutputType[P]>
            : GetScalarType<T[P], OngGroupByOutputType[P]>
        }
      >
    >


  export type OngSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cnpj?: boolean
    descricao?: boolean
    visao?: boolean
    areaAtuacao?: boolean
    endereco?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vagas?: boolean | Ong$vagasArgs<ExtArgs>
    avaliacao?: boolean | Ong$avaliacaoArgs<ExtArgs>
    _count?: boolean | OngCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ong"]>

  export type OngSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    cnpj?: boolean
    descricao?: boolean
    visao?: boolean
    areaAtuacao?: boolean
    endereco?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ong"]>

  export type OngSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    cnpj?: boolean
    descricao?: boolean
    visao?: boolean
    areaAtuacao?: boolean
    endereco?: boolean
  }

  export type OngInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vagas?: boolean | Ong$vagasArgs<ExtArgs>
    avaliacao?: boolean | Ong$avaliacaoArgs<ExtArgs>
    _count?: boolean | OngCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OngIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $OngPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ong"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      vagas: Prisma.$VagaPayload<ExtArgs>[]
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      cnpj: string
      descricao: string
      visao: string
      areaAtuacao: string
      endereco: string
    }, ExtArgs["result"]["ong"]>
    composites: {}
  }

  type OngGetPayload<S extends boolean | null | undefined | OngDefaultArgs> = $Result.GetResult<Prisma.$OngPayload, S>

  type OngCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OngFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OngCountAggregateInputType | true
    }

  export interface OngDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ong'], meta: { name: 'Ong' } }
    /**
     * Find zero or one Ong that matches the filter.
     * @param {OngFindUniqueArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OngFindUniqueArgs>(args: SelectSubset<T, OngFindUniqueArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ong that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OngFindUniqueOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OngFindUniqueOrThrowArgs>(args: SelectSubset<T, OngFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OngFindFirstArgs>(args?: SelectSubset<T, OngFindFirstArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OngFindFirstOrThrowArgs>(args?: SelectSubset<T, OngFindFirstOrThrowArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ongs
     * const ongs = await prisma.ong.findMany()
     * 
     * // Get first 10 Ongs
     * const ongs = await prisma.ong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongWithIdOnly = await prisma.ong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OngFindManyArgs>(args?: SelectSubset<T, OngFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ong.
     * @param {OngCreateArgs} args - Arguments to create a Ong.
     * @example
     * // Create one Ong
     * const Ong = await prisma.ong.create({
     *   data: {
     *     // ... data to create a Ong
     *   }
     * })
     * 
     */
    create<T extends OngCreateArgs>(args: SelectSubset<T, OngCreateArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ongs.
     * @param {OngCreateManyArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OngCreateManyArgs>(args?: SelectSubset<T, OngCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ongs and returns the data saved in the database.
     * @param {OngCreateManyAndReturnArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ongs and only return the `id`
     * const ongWithIdOnly = await prisma.ong.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OngCreateManyAndReturnArgs>(args?: SelectSubset<T, OngCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ong.
     * @param {OngDeleteArgs} args - Arguments to delete one Ong.
     * @example
     * // Delete one Ong
     * const Ong = await prisma.ong.delete({
     *   where: {
     *     // ... filter to delete one Ong
     *   }
     * })
     * 
     */
    delete<T extends OngDeleteArgs>(args: SelectSubset<T, OngDeleteArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ong.
     * @param {OngUpdateArgs} args - Arguments to update one Ong.
     * @example
     * // Update one Ong
     * const ong = await prisma.ong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OngUpdateArgs>(args: SelectSubset<T, OngUpdateArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ongs.
     * @param {OngDeleteManyArgs} args - Arguments to filter Ongs to delete.
     * @example
     * // Delete a few Ongs
     * const { count } = await prisma.ong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OngDeleteManyArgs>(args?: SelectSubset<T, OngDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ongs
     * const ong = await prisma.ong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OngUpdateManyArgs>(args: SelectSubset<T, OngUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ong.
     * @param {OngUpsertArgs} args - Arguments to update or create a Ong.
     * @example
     * // Update or create a Ong
     * const ong = await prisma.ong.upsert({
     *   create: {
     *     // ... data to create a Ong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ong we want to update
     *   }
     * })
     */
    upsert<T extends OngUpsertArgs>(args: SelectSubset<T, OngUpsertArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngCountArgs} args - Arguments to filter Ongs to count.
     * @example
     * // Count the number of Ongs
     * const count = await prisma.ong.count({
     *   where: {
     *     // ... the filter for the Ongs we want to count
     *   }
     * })
    **/
    count<T extends OngCountArgs>(
      args?: Subset<T, OngCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OngAggregateArgs>(args: Subset<T, OngAggregateArgs>): Prisma.PrismaPromise<GetOngAggregateType<T>>

    /**
     * Group by Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngGroupByArgs} args - Group by arguments.
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
      T extends OngGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OngGroupByArgs['orderBy'] }
        : { orderBy?: OngGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OngGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ong model
   */
  readonly fields: OngFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OngClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vagas<T extends Ong$vagasArgs<ExtArgs> = {}>(args?: Subset<T, Ong$vagasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findMany"> | Null>
    avaliacao<T extends Ong$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Ong$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Ong model
   */ 
  interface OngFieldRefs {
    readonly id: FieldRef<"Ong", 'String'>
    readonly usuarioId: FieldRef<"Ong", 'String'>
    readonly cnpj: FieldRef<"Ong", 'String'>
    readonly descricao: FieldRef<"Ong", 'String'>
    readonly visao: FieldRef<"Ong", 'String'>
    readonly areaAtuacao: FieldRef<"Ong", 'String'>
    readonly endereco: FieldRef<"Ong", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ong findUnique
   */
  export type OngFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findUniqueOrThrow
   */
  export type OngFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findFirst
   */
  export type OngFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findFirstOrThrow
   */
  export type OngFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findMany
   */
  export type OngFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ongs to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong create
   */
  export type OngCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The data needed to create a Ong.
     */
    data: XOR<OngCreateInput, OngUncheckedCreateInput>
  }

  /**
   * Ong createMany
   */
  export type OngCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
  }

  /**
   * Ong createManyAndReturn
   */
  export type OngCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ong update
   */
  export type OngUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The data needed to update a Ong.
     */
    data: XOR<OngUpdateInput, OngUncheckedUpdateInput>
    /**
     * Choose, which Ong to update.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong updateMany
   */
  export type OngUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ongs.
     */
    data: XOR<OngUpdateManyMutationInput, OngUncheckedUpdateManyInput>
    /**
     * Filter which Ongs to update
     */
    where?: OngWhereInput
  }

  /**
   * Ong upsert
   */
  export type OngUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The filter to search for the Ong to update in case it exists.
     */
    where: OngWhereUniqueInput
    /**
     * In case the Ong found by the `where` argument doesn't exist, create a new Ong with this data.
     */
    create: XOR<OngCreateInput, OngUncheckedCreateInput>
    /**
     * In case the Ong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OngUpdateInput, OngUncheckedUpdateInput>
  }

  /**
   * Ong delete
   */
  export type OngDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter which Ong to delete.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong deleteMany
   */
  export type OngDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ongs to delete
     */
    where?: OngWhereInput
  }

  /**
   * Ong.vagas
   */
  export type Ong$vagasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    where?: VagaWhereInput
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    cursor?: VagaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Ong.avaliacao
   */
  export type Ong$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Ong without action
   */
  export type OngDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
  }


  /**
   * Model Vaga
   */

  export type AggregateVaga = {
    _count: VagaCountAggregateOutputType | null
    _min: VagaMinAggregateOutputType | null
    _max: VagaMaxAggregateOutputType | null
  }

  export type VagaMinAggregateOutputType = {
    id: string | null
    ongId: string | null
    descricao: string | null
    requesitos: string | null
    status: string | null
    duracao: string | null
    localizacao: string | null
  }

  export type VagaMaxAggregateOutputType = {
    id: string | null
    ongId: string | null
    descricao: string | null
    requesitos: string | null
    status: string | null
    duracao: string | null
    localizacao: string | null
  }

  export type VagaCountAggregateOutputType = {
    id: number
    ongId: number
    descricao: number
    requesitos: number
    status: number
    duracao: number
    localizacao: number
    _all: number
  }


  export type VagaMinAggregateInputType = {
    id?: true
    ongId?: true
    descricao?: true
    requesitos?: true
    status?: true
    duracao?: true
    localizacao?: true
  }

  export type VagaMaxAggregateInputType = {
    id?: true
    ongId?: true
    descricao?: true
    requesitos?: true
    status?: true
    duracao?: true
    localizacao?: true
  }

  export type VagaCountAggregateInputType = {
    id?: true
    ongId?: true
    descricao?: true
    requesitos?: true
    status?: true
    duracao?: true
    localizacao?: true
    _all?: true
  }

  export type VagaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaga to aggregate.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vagas
    **/
    _count?: true | VagaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VagaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VagaMaxAggregateInputType
  }

  export type GetVagaAggregateType<T extends VagaAggregateArgs> = {
        [P in keyof T & keyof AggregateVaga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaga[P]>
      : GetScalarType<T[P], AggregateVaga[P]>
  }




  export type VagaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VagaWhereInput
    orderBy?: VagaOrderByWithAggregationInput | VagaOrderByWithAggregationInput[]
    by: VagaScalarFieldEnum[] | VagaScalarFieldEnum
    having?: VagaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VagaCountAggregateInputType | true
    _min?: VagaMinAggregateInputType
    _max?: VagaMaxAggregateInputType
  }

  export type VagaGroupByOutputType = {
    id: string
    ongId: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
    _count: VagaCountAggregateOutputType | null
    _min: VagaMinAggregateOutputType | null
    _max: VagaMaxAggregateOutputType | null
  }

  type GetVagaGroupByPayload<T extends VagaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VagaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VagaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VagaGroupByOutputType[P]>
            : GetScalarType<T[P], VagaGroupByOutputType[P]>
        }
      >
    >


  export type VagaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ongId?: boolean
    descricao?: boolean
    requesitos?: boolean
    status?: boolean
    duracao?: boolean
    localizacao?: boolean
    ong?: boolean | OngDefaultArgs<ExtArgs>
    inscricoes?: boolean | Vaga$inscricoesArgs<ExtArgs>
    _count?: boolean | VagaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaga"]>

  export type VagaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ongId?: boolean
    descricao?: boolean
    requesitos?: boolean
    status?: boolean
    duracao?: boolean
    localizacao?: boolean
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaga"]>

  export type VagaSelectScalar = {
    id?: boolean
    ongId?: boolean
    descricao?: boolean
    requesitos?: boolean
    status?: boolean
    duracao?: boolean
    localizacao?: boolean
  }

  export type VagaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | OngDefaultArgs<ExtArgs>
    inscricoes?: boolean | Vaga$inscricoesArgs<ExtArgs>
    _count?: boolean | VagaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VagaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }

  export type $VagaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaga"
    objects: {
      ong: Prisma.$OngPayload<ExtArgs>
      inscricoes: Prisma.$InscricaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ongId: string
      descricao: string
      requesitos: string
      status: string
      duracao: string
      localizacao: string
    }, ExtArgs["result"]["vaga"]>
    composites: {}
  }

  type VagaGetPayload<S extends boolean | null | undefined | VagaDefaultArgs> = $Result.GetResult<Prisma.$VagaPayload, S>

  type VagaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VagaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VagaCountAggregateInputType | true
    }

  export interface VagaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaga'], meta: { name: 'Vaga' } }
    /**
     * Find zero or one Vaga that matches the filter.
     * @param {VagaFindUniqueArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VagaFindUniqueArgs>(args: SelectSubset<T, VagaFindUniqueArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vaga that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VagaFindUniqueOrThrowArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VagaFindUniqueOrThrowArgs>(args: SelectSubset<T, VagaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vaga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindFirstArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VagaFindFirstArgs>(args?: SelectSubset<T, VagaFindFirstArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vaga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindFirstOrThrowArgs} args - Arguments to find a Vaga
     * @example
     * // Get one Vaga
     * const vaga = await prisma.vaga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VagaFindFirstOrThrowArgs>(args?: SelectSubset<T, VagaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vagas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vagas
     * const vagas = await prisma.vaga.findMany()
     * 
     * // Get first 10 Vagas
     * const vagas = await prisma.vaga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vagaWithIdOnly = await prisma.vaga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VagaFindManyArgs>(args?: SelectSubset<T, VagaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vaga.
     * @param {VagaCreateArgs} args - Arguments to create a Vaga.
     * @example
     * // Create one Vaga
     * const Vaga = await prisma.vaga.create({
     *   data: {
     *     // ... data to create a Vaga
     *   }
     * })
     * 
     */
    create<T extends VagaCreateArgs>(args: SelectSubset<T, VagaCreateArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vagas.
     * @param {VagaCreateManyArgs} args - Arguments to create many Vagas.
     * @example
     * // Create many Vagas
     * const vaga = await prisma.vaga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VagaCreateManyArgs>(args?: SelectSubset<T, VagaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vagas and returns the data saved in the database.
     * @param {VagaCreateManyAndReturnArgs} args - Arguments to create many Vagas.
     * @example
     * // Create many Vagas
     * const vaga = await prisma.vaga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vagas and only return the `id`
     * const vagaWithIdOnly = await prisma.vaga.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VagaCreateManyAndReturnArgs>(args?: SelectSubset<T, VagaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vaga.
     * @param {VagaDeleteArgs} args - Arguments to delete one Vaga.
     * @example
     * // Delete one Vaga
     * const Vaga = await prisma.vaga.delete({
     *   where: {
     *     // ... filter to delete one Vaga
     *   }
     * })
     * 
     */
    delete<T extends VagaDeleteArgs>(args: SelectSubset<T, VagaDeleteArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vaga.
     * @param {VagaUpdateArgs} args - Arguments to update one Vaga.
     * @example
     * // Update one Vaga
     * const vaga = await prisma.vaga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VagaUpdateArgs>(args: SelectSubset<T, VagaUpdateArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vagas.
     * @param {VagaDeleteManyArgs} args - Arguments to filter Vagas to delete.
     * @example
     * // Delete a few Vagas
     * const { count } = await prisma.vaga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VagaDeleteManyArgs>(args?: SelectSubset<T, VagaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vagas
     * const vaga = await prisma.vaga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VagaUpdateManyArgs>(args: SelectSubset<T, VagaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vaga.
     * @param {VagaUpsertArgs} args - Arguments to update or create a Vaga.
     * @example
     * // Update or create a Vaga
     * const vaga = await prisma.vaga.upsert({
     *   create: {
     *     // ... data to create a Vaga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaga we want to update
     *   }
     * })
     */
    upsert<T extends VagaUpsertArgs>(args: SelectSubset<T, VagaUpsertArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vagas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaCountArgs} args - Arguments to filter Vagas to count.
     * @example
     * // Count the number of Vagas
     * const count = await prisma.vaga.count({
     *   where: {
     *     // ... the filter for the Vagas we want to count
     *   }
     * })
    **/
    count<T extends VagaCountArgs>(
      args?: Subset<T, VagaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VagaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VagaAggregateArgs>(args: Subset<T, VagaAggregateArgs>): Prisma.PrismaPromise<GetVagaAggregateType<T>>

    /**
     * Group by Vaga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VagaGroupByArgs} args - Group by arguments.
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
      T extends VagaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VagaGroupByArgs['orderBy'] }
        : { orderBy?: VagaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VagaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVagaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaga model
   */
  readonly fields: VagaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VagaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ong<T extends OngDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OngDefaultArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inscricoes<T extends Vaga$inscricoesArgs<ExtArgs> = {}>(args?: Subset<T, Vaga$inscricoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Vaga model
   */ 
  interface VagaFieldRefs {
    readonly id: FieldRef<"Vaga", 'String'>
    readonly ongId: FieldRef<"Vaga", 'String'>
    readonly descricao: FieldRef<"Vaga", 'String'>
    readonly requesitos: FieldRef<"Vaga", 'String'>
    readonly status: FieldRef<"Vaga", 'String'>
    readonly duracao: FieldRef<"Vaga", 'String'>
    readonly localizacao: FieldRef<"Vaga", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vaga findUnique
   */
  export type VagaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga findUniqueOrThrow
   */
  export type VagaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga findFirst
   */
  export type VagaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagas.
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagas.
     */
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Vaga findFirstOrThrow
   */
  export type VagaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vaga to fetch.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vagas.
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vagas.
     */
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Vaga findMany
   */
  export type VagaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter, which Vagas to fetch.
     */
    where?: VagaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vagas to fetch.
     */
    orderBy?: VagaOrderByWithRelationInput | VagaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vagas.
     */
    cursor?: VagaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vagas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vagas.
     */
    skip?: number
    distinct?: VagaScalarFieldEnum | VagaScalarFieldEnum[]
  }

  /**
   * Vaga create
   */
  export type VagaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaga.
     */
    data: XOR<VagaCreateInput, VagaUncheckedCreateInput>
  }

  /**
   * Vaga createMany
   */
  export type VagaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vagas.
     */
    data: VagaCreateManyInput | VagaCreateManyInput[]
  }

  /**
   * Vaga createManyAndReturn
   */
  export type VagaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vagas.
     */
    data: VagaCreateManyInput | VagaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaga update
   */
  export type VagaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaga.
     */
    data: XOR<VagaUpdateInput, VagaUncheckedUpdateInput>
    /**
     * Choose, which Vaga to update.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga updateMany
   */
  export type VagaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vagas.
     */
    data: XOR<VagaUpdateManyMutationInput, VagaUncheckedUpdateManyInput>
    /**
     * Filter which Vagas to update
     */
    where?: VagaWhereInput
  }

  /**
   * Vaga upsert
   */
  export type VagaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaga to update in case it exists.
     */
    where: VagaWhereUniqueInput
    /**
     * In case the Vaga found by the `where` argument doesn't exist, create a new Vaga with this data.
     */
    create: XOR<VagaCreateInput, VagaUncheckedCreateInput>
    /**
     * In case the Vaga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VagaUpdateInput, VagaUncheckedUpdateInput>
  }

  /**
   * Vaga delete
   */
  export type VagaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
    /**
     * Filter which Vaga to delete.
     */
    where: VagaWhereUniqueInput
  }

  /**
   * Vaga deleteMany
   */
  export type VagaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vagas to delete
     */
    where?: VagaWhereInput
  }

  /**
   * Vaga.inscricoes
   */
  export type Vaga$inscricoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    cursor?: InscricaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Vaga without action
   */
  export type VagaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaga
     */
    select?: VagaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VagaInclude<ExtArgs> | null
  }


  /**
   * Model Inscricao
   */

  export type AggregateInscricao = {
    _count: InscricaoCountAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  export type InscricaoMinAggregateOutputType = {
    id: string | null
    voluntarioId: string | null
    vagaId: string | null
    data: Date | null
    status: string | null
  }

  export type InscricaoMaxAggregateOutputType = {
    id: string | null
    voluntarioId: string | null
    vagaId: string | null
    data: Date | null
    status: string | null
  }

  export type InscricaoCountAggregateOutputType = {
    id: number
    voluntarioId: number
    vagaId: number
    data: number
    status: number
    _all: number
  }


  export type InscricaoMinAggregateInputType = {
    id?: true
    voluntarioId?: true
    vagaId?: true
    data?: true
    status?: true
  }

  export type InscricaoMaxAggregateInputType = {
    id?: true
    voluntarioId?: true
    vagaId?: true
    data?: true
    status?: true
  }

  export type InscricaoCountAggregateInputType = {
    id?: true
    voluntarioId?: true
    vagaId?: true
    data?: true
    status?: true
    _all?: true
  }

  export type InscricaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricao to aggregate.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscricaos
    **/
    _count?: true | InscricaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscricaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscricaoMaxAggregateInputType
  }

  export type GetInscricaoAggregateType<T extends InscricaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInscricao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscricao[P]>
      : GetScalarType<T[P], AggregateInscricao[P]>
  }




  export type InscricaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscricaoWhereInput
    orderBy?: InscricaoOrderByWithAggregationInput | InscricaoOrderByWithAggregationInput[]
    by: InscricaoScalarFieldEnum[] | InscricaoScalarFieldEnum
    having?: InscricaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscricaoCountAggregateInputType | true
    _min?: InscricaoMinAggregateInputType
    _max?: InscricaoMaxAggregateInputType
  }

  export type InscricaoGroupByOutputType = {
    id: string
    voluntarioId: string
    vagaId: string
    data: Date
    status: string
    _count: InscricaoCountAggregateOutputType | null
    _min: InscricaoMinAggregateOutputType | null
    _max: InscricaoMaxAggregateOutputType | null
  }

  type GetInscricaoGroupByPayload<T extends InscricaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscricaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscricaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
            : GetScalarType<T[P], InscricaoGroupByOutputType[P]>
        }
      >
    >


  export type InscricaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntarioId?: boolean
    vagaId?: boolean
    data?: boolean
    status?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntarioId?: boolean
    vagaId?: boolean
    data?: boolean
    status?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscricao"]>

  export type InscricaoSelectScalar = {
    id?: boolean
    voluntarioId?: boolean
    vagaId?: boolean
    data?: boolean
    status?: boolean
  }

  export type InscricaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
  }
  export type InscricaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    vaga?: boolean | VagaDefaultArgs<ExtArgs>
  }

  export type $InscricaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscricao"
    objects: {
      voluntario: Prisma.$VoluntarioPayload<ExtArgs>
      vaga: Prisma.$VagaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voluntarioId: string
      vagaId: string
      data: Date
      status: string
    }, ExtArgs["result"]["inscricao"]>
    composites: {}
  }

  type InscricaoGetPayload<S extends boolean | null | undefined | InscricaoDefaultArgs> = $Result.GetResult<Prisma.$InscricaoPayload, S>

  type InscricaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InscricaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InscricaoCountAggregateInputType | true
    }

  export interface InscricaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscricao'], meta: { name: 'Inscricao' } }
    /**
     * Find zero or one Inscricao that matches the filter.
     * @param {InscricaoFindUniqueArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscricaoFindUniqueArgs>(args: SelectSubset<T, InscricaoFindUniqueArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inscricao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InscricaoFindUniqueOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscricaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InscricaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inscricao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscricaoFindFirstArgs>(args?: SelectSubset<T, InscricaoFindFirstArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inscricao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindFirstOrThrowArgs} args - Arguments to find a Inscricao
     * @example
     * // Get one Inscricao
     * const inscricao = await prisma.inscricao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscricaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InscricaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inscricaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscricaos
     * const inscricaos = await prisma.inscricao.findMany()
     * 
     * // Get first 10 Inscricaos
     * const inscricaos = await prisma.inscricao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscricaoFindManyArgs>(args?: SelectSubset<T, InscricaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inscricao.
     * @param {InscricaoCreateArgs} args - Arguments to create a Inscricao.
     * @example
     * // Create one Inscricao
     * const Inscricao = await prisma.inscricao.create({
     *   data: {
     *     // ... data to create a Inscricao
     *   }
     * })
     * 
     */
    create<T extends InscricaoCreateArgs>(args: SelectSubset<T, InscricaoCreateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inscricaos.
     * @param {InscricaoCreateManyArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscricaoCreateManyArgs>(args?: SelectSubset<T, InscricaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscricaos and returns the data saved in the database.
     * @param {InscricaoCreateManyAndReturnArgs} args - Arguments to create many Inscricaos.
     * @example
     * // Create many Inscricaos
     * const inscricao = await prisma.inscricao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscricaos and only return the `id`
     * const inscricaoWithIdOnly = await prisma.inscricao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscricaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InscricaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inscricao.
     * @param {InscricaoDeleteArgs} args - Arguments to delete one Inscricao.
     * @example
     * // Delete one Inscricao
     * const Inscricao = await prisma.inscricao.delete({
     *   where: {
     *     // ... filter to delete one Inscricao
     *   }
     * })
     * 
     */
    delete<T extends InscricaoDeleteArgs>(args: SelectSubset<T, InscricaoDeleteArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inscricao.
     * @param {InscricaoUpdateArgs} args - Arguments to update one Inscricao.
     * @example
     * // Update one Inscricao
     * const inscricao = await prisma.inscricao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscricaoUpdateArgs>(args: SelectSubset<T, InscricaoUpdateArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inscricaos.
     * @param {InscricaoDeleteManyArgs} args - Arguments to filter Inscricaos to delete.
     * @example
     * // Delete a few Inscricaos
     * const { count } = await prisma.inscricao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscricaoDeleteManyArgs>(args?: SelectSubset<T, InscricaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscricaos
     * const inscricao = await prisma.inscricao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscricaoUpdateManyArgs>(args: SelectSubset<T, InscricaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inscricao.
     * @param {InscricaoUpsertArgs} args - Arguments to update or create a Inscricao.
     * @example
     * // Update or create a Inscricao
     * const inscricao = await prisma.inscricao.upsert({
     *   create: {
     *     // ... data to create a Inscricao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscricao we want to update
     *   }
     * })
     */
    upsert<T extends InscricaoUpsertArgs>(args: SelectSubset<T, InscricaoUpsertArgs<ExtArgs>>): Prisma__InscricaoClient<$Result.GetResult<Prisma.$InscricaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inscricaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoCountArgs} args - Arguments to filter Inscricaos to count.
     * @example
     * // Count the number of Inscricaos
     * const count = await prisma.inscricao.count({
     *   where: {
     *     // ... the filter for the Inscricaos we want to count
     *   }
     * })
    **/
    count<T extends InscricaoCountArgs>(
      args?: Subset<T, InscricaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscricaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscricaoAggregateArgs>(args: Subset<T, InscricaoAggregateArgs>): Prisma.PrismaPromise<GetInscricaoAggregateType<T>>

    /**
     * Group by Inscricao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscricaoGroupByArgs} args - Group by arguments.
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
      T extends InscricaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscricaoGroupByArgs['orderBy'] }
        : { orderBy?: InscricaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscricaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscricaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscricao model
   */
  readonly fields: InscricaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscricao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscricaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voluntario<T extends VoluntarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoluntarioDefaultArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    vaga<T extends VagaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VagaDefaultArgs<ExtArgs>>): Prisma__VagaClient<$Result.GetResult<Prisma.$VagaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Inscricao model
   */ 
  interface InscricaoFieldRefs {
    readonly id: FieldRef<"Inscricao", 'String'>
    readonly voluntarioId: FieldRef<"Inscricao", 'String'>
    readonly vagaId: FieldRef<"Inscricao", 'String'>
    readonly data: FieldRef<"Inscricao", 'DateTime'>
    readonly status: FieldRef<"Inscricao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inscricao findUnique
   */
  export type InscricaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findUniqueOrThrow
   */
  export type InscricaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao findFirst
   */
  export type InscricaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findFirstOrThrow
   */
  export type InscricaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricao to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscricaos.
     */
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao findMany
   */
  export type InscricaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter, which Inscricaos to fetch.
     */
    where?: InscricaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscricaos to fetch.
     */
    orderBy?: InscricaoOrderByWithRelationInput | InscricaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscricaos.
     */
    cursor?: InscricaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscricaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscricaos.
     */
    skip?: number
    distinct?: InscricaoScalarFieldEnum | InscricaoScalarFieldEnum[]
  }

  /**
   * Inscricao create
   */
  export type InscricaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscricao.
     */
    data: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
  }

  /**
   * Inscricao createMany
   */
  export type InscricaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
  }

  /**
   * Inscricao createManyAndReturn
   */
  export type InscricaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inscricaos.
     */
    data: InscricaoCreateManyInput | InscricaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscricao update
   */
  export type InscricaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscricao.
     */
    data: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
    /**
     * Choose, which Inscricao to update.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao updateMany
   */
  export type InscricaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscricaos.
     */
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyInput>
    /**
     * Filter which Inscricaos to update
     */
    where?: InscricaoWhereInput
  }

  /**
   * Inscricao upsert
   */
  export type InscricaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscricao to update in case it exists.
     */
    where: InscricaoWhereUniqueInput
    /**
     * In case the Inscricao found by the `where` argument doesn't exist, create a new Inscricao with this data.
     */
    create: XOR<InscricaoCreateInput, InscricaoUncheckedCreateInput>
    /**
     * In case the Inscricao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscricaoUpdateInput, InscricaoUncheckedUpdateInput>
  }

  /**
   * Inscricao delete
   */
  export type InscricaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
    /**
     * Filter which Inscricao to delete.
     */
    where: InscricaoWhereUniqueInput
  }

  /**
   * Inscricao deleteMany
   */
  export type InscricaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscricaos to delete
     */
    where?: InscricaoWhereInput
  }

  /**
   * Inscricao without action
   */
  export type InscricaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscricao
     */
    select?: InscricaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscricaoInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: string | null
    voluntarioId: string | null
    ongId: string | null
    data: Date | null
    frequecia: string | null
    tipo: string | null
    comentario: string | null
    nota: number | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: string | null
    voluntarioId: string | null
    ongId: string | null
    data: Date | null
    frequecia: string | null
    tipo: string | null
    comentario: string | null
    nota: number | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    voluntarioId: number
    ongId: number
    data: number
    frequecia: number
    tipo: number
    comentario: number
    nota: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    voluntarioId?: true
    ongId?: true
    data?: true
    frequecia?: true
    tipo?: true
    comentario?: true
    nota?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    voluntarioId?: true
    ongId?: true
    data?: true
    frequecia?: true
    tipo?: true
    comentario?: true
    nota?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    voluntarioId?: true
    ongId?: true
    data?: true
    frequecia?: true
    tipo?: true
    comentario?: true
    nota?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: string
    voluntarioId: string
    ongId: string
    data: Date
    frequecia: string | null
    tipo: string
    comentario: string
    nota: number
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntarioId?: boolean
    ongId?: boolean
    data?: boolean
    frequecia?: boolean
    tipo?: boolean
    comentario?: boolean
    nota?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntarioId?: boolean
    ongId?: boolean
    data?: boolean
    frequecia?: boolean
    tipo?: boolean
    comentario?: boolean
    nota?: boolean
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    voluntarioId?: boolean
    ongId?: boolean
    data?: boolean
    frequecia?: boolean
    tipo?: boolean
    comentario?: boolean
    nota?: boolean
  }

  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntario?: boolean | VoluntarioDefaultArgs<ExtArgs>
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      voluntario: Prisma.$VoluntarioPayload<ExtArgs>
      ong: Prisma.$OngPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voluntarioId: string
      ongId: string
      data: Date
      frequecia: string | null
      tipo: string
      comentario: string
      nota: number
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voluntario<T extends VoluntarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoluntarioDefaultArgs<ExtArgs>>): Prisma__VoluntarioClient<$Result.GetResult<Prisma.$VoluntarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ong<T extends OngDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OngDefaultArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Avaliacao model
   */ 
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'String'>
    readonly voluntarioId: FieldRef<"Avaliacao", 'String'>
    readonly ongId: FieldRef<"Avaliacao", 'String'>
    readonly data: FieldRef<"Avaliacao", 'DateTime'>
    readonly frequecia: FieldRef<"Avaliacao", 'String'>
    readonly tipo: FieldRef<"Avaliacao", 'String'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly nota: FieldRef<"Avaliacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    imagem: 'imagem',
    tipo: 'tipo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VoluntarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    interesses: 'interesses',
    habilidades: 'habilidades',
    disponibilidade: 'disponibilidade'
  };

  export type VoluntarioScalarFieldEnum = (typeof VoluntarioScalarFieldEnum)[keyof typeof VoluntarioScalarFieldEnum]


  export const OngScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    cnpj: 'cnpj',
    descricao: 'descricao',
    visao: 'visao',
    areaAtuacao: 'areaAtuacao',
    endereco: 'endereco'
  };

  export type OngScalarFieldEnum = (typeof OngScalarFieldEnum)[keyof typeof OngScalarFieldEnum]


  export const VagaScalarFieldEnum: {
    id: 'id',
    ongId: 'ongId',
    descricao: 'descricao',
    requesitos: 'requesitos',
    status: 'status',
    duracao: 'duracao',
    localizacao: 'localizacao'
  };

  export type VagaScalarFieldEnum = (typeof VagaScalarFieldEnum)[keyof typeof VagaScalarFieldEnum]


  export const InscricaoScalarFieldEnum: {
    id: 'id',
    voluntarioId: 'voluntarioId',
    vagaId: 'vagaId',
    data: 'data',
    status: 'status'
  };

  export type InscricaoScalarFieldEnum = (typeof InscricaoScalarFieldEnum)[keyof typeof InscricaoScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    voluntarioId: 'voluntarioId',
    ongId: 'ongId',
    data: 'data',
    frequecia: 'frequecia',
    tipo: 'tipo',
    comentario: 'comentario',
    nota: 'nota'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    imagem?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringFilter<"Usuario"> | string
    voluntario?: XOR<VoluntarioNullableScalarRelationFilter, VoluntarioWhereInput> | null
    ong?: XOR<OngNullableScalarRelationFilter, OngWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    imagem?: SortOrderInput | SortOrder
    tipo?: SortOrder
    voluntario?: VoluntarioOrderByWithRelationInput
    ong?: OngOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    imagem?: StringNullableFilter<"Usuario"> | string | null
    tipo?: StringFilter<"Usuario"> | string
    voluntario?: XOR<VoluntarioNullableScalarRelationFilter, VoluntarioWhereInput> | null
    ong?: XOR<OngNullableScalarRelationFilter, OngWhereInput> | null
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    imagem?: SortOrderInput | SortOrder
    tipo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    imagem?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    tipo?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type VoluntarioWhereInput = {
    AND?: VoluntarioWhereInput | VoluntarioWhereInput[]
    OR?: VoluntarioWhereInput[]
    NOT?: VoluntarioWhereInput | VoluntarioWhereInput[]
    id?: StringFilter<"Voluntario"> | string
    usuarioId?: StringFilter<"Voluntario"> | string
    interesses?: StringFilter<"Voluntario"> | string
    habilidades?: StringFilter<"Voluntario"> | string
    disponibilidade?: StringFilter<"Voluntario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    inscricoes?: InscricaoListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
  }

  export type VoluntarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    interesses?: SortOrder
    habilidades?: SortOrder
    disponibilidade?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    inscricoes?: InscricaoOrderByRelationAggregateInput
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
  }

  export type VoluntarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: VoluntarioWhereInput | VoluntarioWhereInput[]
    OR?: VoluntarioWhereInput[]
    NOT?: VoluntarioWhereInput | VoluntarioWhereInput[]
    interesses?: StringFilter<"Voluntario"> | string
    habilidades?: StringFilter<"Voluntario"> | string
    disponibilidade?: StringFilter<"Voluntario"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    inscricoes?: InscricaoListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
  }, "id" | "usuarioId">

  export type VoluntarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    interesses?: SortOrder
    habilidades?: SortOrder
    disponibilidade?: SortOrder
    _count?: VoluntarioCountOrderByAggregateInput
    _max?: VoluntarioMaxOrderByAggregateInput
    _min?: VoluntarioMinOrderByAggregateInput
  }

  export type VoluntarioScalarWhereWithAggregatesInput = {
    AND?: VoluntarioScalarWhereWithAggregatesInput | VoluntarioScalarWhereWithAggregatesInput[]
    OR?: VoluntarioScalarWhereWithAggregatesInput[]
    NOT?: VoluntarioScalarWhereWithAggregatesInput | VoluntarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voluntario"> | string
    usuarioId?: StringWithAggregatesFilter<"Voluntario"> | string
    interesses?: StringWithAggregatesFilter<"Voluntario"> | string
    habilidades?: StringWithAggregatesFilter<"Voluntario"> | string
    disponibilidade?: StringWithAggregatesFilter<"Voluntario"> | string
  }

  export type OngWhereInput = {
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    id?: StringFilter<"Ong"> | string
    usuarioId?: StringFilter<"Ong"> | string
    cnpj?: StringFilter<"Ong"> | string
    descricao?: StringFilter<"Ong"> | string
    visao?: StringFilter<"Ong"> | string
    areaAtuacao?: StringFilter<"Ong"> | string
    endereco?: StringFilter<"Ong"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vagas?: VagaListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
  }

  export type OngOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cnpj?: SortOrder
    descricao?: SortOrder
    visao?: SortOrder
    areaAtuacao?: SortOrder
    endereco?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    vagas?: VagaOrderByRelationAggregateInput
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
  }

  export type OngWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    cnpj?: string
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    descricao?: StringFilter<"Ong"> | string
    visao?: StringFilter<"Ong"> | string
    areaAtuacao?: StringFilter<"Ong"> | string
    endereco?: StringFilter<"Ong"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vagas?: VagaListRelationFilter
    avaliacao?: AvaliacaoListRelationFilter
  }, "id" | "usuarioId" | "cnpj">

  export type OngOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cnpj?: SortOrder
    descricao?: SortOrder
    visao?: SortOrder
    areaAtuacao?: SortOrder
    endereco?: SortOrder
    _count?: OngCountOrderByAggregateInput
    _max?: OngMaxOrderByAggregateInput
    _min?: OngMinOrderByAggregateInput
  }

  export type OngScalarWhereWithAggregatesInput = {
    AND?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    OR?: OngScalarWhereWithAggregatesInput[]
    NOT?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ong"> | string
    usuarioId?: StringWithAggregatesFilter<"Ong"> | string
    cnpj?: StringWithAggregatesFilter<"Ong"> | string
    descricao?: StringWithAggregatesFilter<"Ong"> | string
    visao?: StringWithAggregatesFilter<"Ong"> | string
    areaAtuacao?: StringWithAggregatesFilter<"Ong"> | string
    endereco?: StringWithAggregatesFilter<"Ong"> | string
  }

  export type VagaWhereInput = {
    AND?: VagaWhereInput | VagaWhereInput[]
    OR?: VagaWhereInput[]
    NOT?: VagaWhereInput | VagaWhereInput[]
    id?: StringFilter<"Vaga"> | string
    ongId?: StringFilter<"Vaga"> | string
    descricao?: StringFilter<"Vaga"> | string
    requesitos?: StringFilter<"Vaga"> | string
    status?: StringFilter<"Vaga"> | string
    duracao?: StringFilter<"Vaga"> | string
    localizacao?: StringFilter<"Vaga"> | string
    ong?: XOR<OngScalarRelationFilter, OngWhereInput>
    inscricoes?: InscricaoListRelationFilter
  }

  export type VagaOrderByWithRelationInput = {
    id?: SortOrder
    ongId?: SortOrder
    descricao?: SortOrder
    requesitos?: SortOrder
    status?: SortOrder
    duracao?: SortOrder
    localizacao?: SortOrder
    ong?: OngOrderByWithRelationInput
    inscricoes?: InscricaoOrderByRelationAggregateInput
  }

  export type VagaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VagaWhereInput | VagaWhereInput[]
    OR?: VagaWhereInput[]
    NOT?: VagaWhereInput | VagaWhereInput[]
    ongId?: StringFilter<"Vaga"> | string
    descricao?: StringFilter<"Vaga"> | string
    requesitos?: StringFilter<"Vaga"> | string
    status?: StringFilter<"Vaga"> | string
    duracao?: StringFilter<"Vaga"> | string
    localizacao?: StringFilter<"Vaga"> | string
    ong?: XOR<OngScalarRelationFilter, OngWhereInput>
    inscricoes?: InscricaoListRelationFilter
  }, "id">

  export type VagaOrderByWithAggregationInput = {
    id?: SortOrder
    ongId?: SortOrder
    descricao?: SortOrder
    requesitos?: SortOrder
    status?: SortOrder
    duracao?: SortOrder
    localizacao?: SortOrder
    _count?: VagaCountOrderByAggregateInput
    _max?: VagaMaxOrderByAggregateInput
    _min?: VagaMinOrderByAggregateInput
  }

  export type VagaScalarWhereWithAggregatesInput = {
    AND?: VagaScalarWhereWithAggregatesInput | VagaScalarWhereWithAggregatesInput[]
    OR?: VagaScalarWhereWithAggregatesInput[]
    NOT?: VagaScalarWhereWithAggregatesInput | VagaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vaga"> | string
    ongId?: StringWithAggregatesFilter<"Vaga"> | string
    descricao?: StringWithAggregatesFilter<"Vaga"> | string
    requesitos?: StringWithAggregatesFilter<"Vaga"> | string
    status?: StringWithAggregatesFilter<"Vaga"> | string
    duracao?: StringWithAggregatesFilter<"Vaga"> | string
    localizacao?: StringWithAggregatesFilter<"Vaga"> | string
  }

  export type InscricaoWhereInput = {
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    id?: StringFilter<"Inscricao"> | string
    voluntarioId?: StringFilter<"Inscricao"> | string
    vagaId?: StringFilter<"Inscricao"> | string
    data?: DateTimeFilter<"Inscricao"> | Date | string
    status?: StringFilter<"Inscricao"> | string
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    vaga?: XOR<VagaScalarRelationFilter, VagaWhereInput>
  }

  export type InscricaoOrderByWithRelationInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    vagaId?: SortOrder
    data?: SortOrder
    status?: SortOrder
    voluntario?: VoluntarioOrderByWithRelationInput
    vaga?: VagaOrderByWithRelationInput
  }

  export type InscricaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InscricaoWhereInput | InscricaoWhereInput[]
    OR?: InscricaoWhereInput[]
    NOT?: InscricaoWhereInput | InscricaoWhereInput[]
    voluntarioId?: StringFilter<"Inscricao"> | string
    vagaId?: StringFilter<"Inscricao"> | string
    data?: DateTimeFilter<"Inscricao"> | Date | string
    status?: StringFilter<"Inscricao"> | string
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    vaga?: XOR<VagaScalarRelationFilter, VagaWhereInput>
  }, "id">

  export type InscricaoOrderByWithAggregationInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    vagaId?: SortOrder
    data?: SortOrder
    status?: SortOrder
    _count?: InscricaoCountOrderByAggregateInput
    _max?: InscricaoMaxOrderByAggregateInput
    _min?: InscricaoMinOrderByAggregateInput
  }

  export type InscricaoScalarWhereWithAggregatesInput = {
    AND?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    OR?: InscricaoScalarWhereWithAggregatesInput[]
    NOT?: InscricaoScalarWhereWithAggregatesInput | InscricaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inscricao"> | string
    voluntarioId?: StringWithAggregatesFilter<"Inscricao"> | string
    vagaId?: StringWithAggregatesFilter<"Inscricao"> | string
    data?: DateTimeWithAggregatesFilter<"Inscricao"> | Date | string
    status?: StringWithAggregatesFilter<"Inscricao"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    voluntarioId?: StringFilter<"Avaliacao"> | string
    ongId?: StringFilter<"Avaliacao"> | string
    data?: DateTimeFilter<"Avaliacao"> | Date | string
    frequecia?: StringNullableFilter<"Avaliacao"> | string | null
    tipo?: StringFilter<"Avaliacao"> | string
    comentario?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    ong?: XOR<OngScalarRelationFilter, OngWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    ongId?: SortOrder
    data?: SortOrder
    frequecia?: SortOrderInput | SortOrder
    tipo?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    voluntario?: VoluntarioOrderByWithRelationInput
    ong?: OngOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    voluntarioId?: StringFilter<"Avaliacao"> | string
    ongId?: StringFilter<"Avaliacao"> | string
    data?: DateTimeFilter<"Avaliacao"> | Date | string
    frequecia?: StringNullableFilter<"Avaliacao"> | string | null
    tipo?: StringFilter<"Avaliacao"> | string
    comentario?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
    voluntario?: XOR<VoluntarioScalarRelationFilter, VoluntarioWhereInput>
    ong?: XOR<OngScalarRelationFilter, OngWhereInput>
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    ongId?: SortOrder
    data?: SortOrder
    frequecia?: SortOrderInput | SortOrder
    tipo?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avaliacao"> | string
    voluntarioId?: StringWithAggregatesFilter<"Avaliacao"> | string
    ongId?: StringWithAggregatesFilter<"Avaliacao"> | string
    data?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    frequecia?: StringNullableWithAggregatesFilter<"Avaliacao"> | string | null
    tipo?: StringWithAggregatesFilter<"Avaliacao"> | string
    comentario?: StringWithAggregatesFilter<"Avaliacao"> | string
    nota?: IntWithAggregatesFilter<"Avaliacao"> | number
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
    voluntario?: VoluntarioCreateNestedOneWithoutUsuarioInput
    ong?: OngCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
    voluntario?: VoluntarioUncheckedCreateNestedOneWithoutUsuarioInput
    ong?: OngUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    voluntario?: VoluntarioUpdateOneWithoutUsuarioNestedInput
    ong?: OngUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    voluntario?: VoluntarioUncheckedUpdateOneWithoutUsuarioNestedInput
    ong?: OngUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type VoluntarioCreateInput = {
    id?: string
    interesses: string
    habilidades: string
    disponibilidade: string
    usuario: UsuarioCreateNestedOneWithoutVoluntarioInput
    inscricoes?: InscricaoCreateNestedManyWithoutVoluntarioInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateInput = {
    id?: string
    usuarioId: string
    interesses: string
    habilidades: string
    disponibilidade: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVoluntarioInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVoluntarioNestedInput
    inscricoes?: InscricaoUpdateManyWithoutVoluntarioNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVoluntarioNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioCreateManyInput = {
    id?: string
    usuarioId: string
    interesses: string
    habilidades: string
    disponibilidade: string
  }

  export type VoluntarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
  }

  export type VoluntarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
  }

  export type OngCreateInput = {
    id?: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    usuario: UsuarioCreateNestedOneWithoutOngInput
    vagas?: VagaCreateNestedManyWithoutOngInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateInput = {
    id?: string
    usuarioId: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    vagas?: VagaUncheckedCreateNestedManyWithoutOngInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutOngNestedInput
    vagas?: VagaUpdateManyWithoutOngNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    vagas?: VagaUncheckedUpdateManyWithoutOngNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutOngNestedInput
  }

  export type OngCreateManyInput = {
    id?: string
    usuarioId: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
  }

  export type OngUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type OngUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type VagaCreateInput = {
    id?: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
    ong: OngCreateNestedOneWithoutVagasInput
    inscricoes?: InscricaoCreateNestedManyWithoutVagaInput
  }

  export type VagaUncheckedCreateInput = {
    id?: string
    ongId: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    ong?: OngUpdateOneRequiredWithoutVagasNestedInput
    inscricoes?: InscricaoUpdateManyWithoutVagaNestedInput
  }

  export type VagaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagaCreateManyInput = {
    id?: string
    ongId: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
  }

  export type VagaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type VagaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoCreateInput = {
    id?: string
    data?: Date | string
    status: string
    voluntario: VoluntarioCreateNestedOneWithoutInscricoesInput
    vaga: VagaCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateInput = {
    id?: string
    voluntarioId: string
    vagaId: string
    data?: Date | string
    status: string
  }

  export type InscricaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutInscricoesNestedInput
    vaga?: VagaUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoCreateManyInput = {
    id?: string
    voluntarioId: string
    vagaId: string
    data?: Date | string
    status: string
  }

  export type InscricaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    id?: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
    voluntario: VoluntarioCreateNestedOneWithoutAvaliacaoInput
    ong: OngCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: string
    voluntarioId: string
    ongId: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
  }

  export type AvaliacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    voluntario?: VoluntarioUpdateOneRequiredWithoutAvaliacaoNestedInput
    ong?: OngUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoCreateManyInput = {
    id?: string
    voluntarioId: string
    ongId: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VoluntarioNullableScalarRelationFilter = {
    is?: VoluntarioWhereInput | null
    isNot?: VoluntarioWhereInput | null
  }

  export type OngNullableScalarRelationFilter = {
    is?: OngWhereInput | null
    isNot?: OngWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    imagem?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    imagem?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    imagem?: SortOrder
    tipo?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type InscricaoListRelationFilter = {
    every?: InscricaoWhereInput
    some?: InscricaoWhereInput
    none?: InscricaoWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type InscricaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoluntarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    interesses?: SortOrder
    habilidades?: SortOrder
    disponibilidade?: SortOrder
  }

  export type VoluntarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    interesses?: SortOrder
    habilidades?: SortOrder
    disponibilidade?: SortOrder
  }

  export type VoluntarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    interesses?: SortOrder
    habilidades?: SortOrder
    disponibilidade?: SortOrder
  }

  export type VagaListRelationFilter = {
    every?: VagaWhereInput
    some?: VagaWhereInput
    none?: VagaWhereInput
  }

  export type VagaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OngCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cnpj?: SortOrder
    descricao?: SortOrder
    visao?: SortOrder
    areaAtuacao?: SortOrder
    endereco?: SortOrder
  }

  export type OngMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cnpj?: SortOrder
    descricao?: SortOrder
    visao?: SortOrder
    areaAtuacao?: SortOrder
    endereco?: SortOrder
  }

  export type OngMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cnpj?: SortOrder
    descricao?: SortOrder
    visao?: SortOrder
    areaAtuacao?: SortOrder
    endereco?: SortOrder
  }

  export type OngScalarRelationFilter = {
    is?: OngWhereInput
    isNot?: OngWhereInput
  }

  export type VagaCountOrderByAggregateInput = {
    id?: SortOrder
    ongId?: SortOrder
    descricao?: SortOrder
    requesitos?: SortOrder
    status?: SortOrder
    duracao?: SortOrder
    localizacao?: SortOrder
  }

  export type VagaMaxOrderByAggregateInput = {
    id?: SortOrder
    ongId?: SortOrder
    descricao?: SortOrder
    requesitos?: SortOrder
    status?: SortOrder
    duracao?: SortOrder
    localizacao?: SortOrder
  }

  export type VagaMinOrderByAggregateInput = {
    id?: SortOrder
    ongId?: SortOrder
    descricao?: SortOrder
    requesitos?: SortOrder
    status?: SortOrder
    duracao?: SortOrder
    localizacao?: SortOrder
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

  export type VoluntarioScalarRelationFilter = {
    is?: VoluntarioWhereInput
    isNot?: VoluntarioWhereInput
  }

  export type VagaScalarRelationFilter = {
    is?: VagaWhereInput
    isNot?: VagaWhereInput
  }

  export type InscricaoCountOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    vagaId?: SortOrder
    data?: SortOrder
    status?: SortOrder
  }

  export type InscricaoMaxOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    vagaId?: SortOrder
    data?: SortOrder
    status?: SortOrder
  }

  export type InscricaoMinOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    vagaId?: SortOrder
    data?: SortOrder
    status?: SortOrder
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

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    ongId?: SortOrder
    data?: SortOrder
    frequecia?: SortOrder
    tipo?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    ongId?: SortOrder
    data?: SortOrder
    frequecia?: SortOrder
    tipo?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    voluntarioId?: SortOrder
    ongId?: SortOrder
    data?: SortOrder
    frequecia?: SortOrder
    tipo?: SortOrder
    comentario?: SortOrder
    nota?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    nota?: SortOrder
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

  export type VoluntarioCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<VoluntarioCreateWithoutUsuarioInput, VoluntarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutUsuarioInput
    connect?: VoluntarioWhereUniqueInput
  }

  export type OngCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<OngCreateWithoutUsuarioInput, OngUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OngCreateOrConnectWithoutUsuarioInput
    connect?: OngWhereUniqueInput
  }

  export type VoluntarioUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<VoluntarioCreateWithoutUsuarioInput, VoluntarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutUsuarioInput
    connect?: VoluntarioWhereUniqueInput
  }

  export type OngUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<OngCreateWithoutUsuarioInput, OngUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OngCreateOrConnectWithoutUsuarioInput
    connect?: OngWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VoluntarioUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<VoluntarioCreateWithoutUsuarioInput, VoluntarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutUsuarioInput
    upsert?: VoluntarioUpsertWithoutUsuarioInput
    disconnect?: VoluntarioWhereInput | boolean
    delete?: VoluntarioWhereInput | boolean
    connect?: VoluntarioWhereUniqueInput
    update?: XOR<XOR<VoluntarioUpdateToOneWithWhereWithoutUsuarioInput, VoluntarioUpdateWithoutUsuarioInput>, VoluntarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type OngUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<OngCreateWithoutUsuarioInput, OngUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OngCreateOrConnectWithoutUsuarioInput
    upsert?: OngUpsertWithoutUsuarioInput
    disconnect?: OngWhereInput | boolean
    delete?: OngWhereInput | boolean
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutUsuarioInput, OngUpdateWithoutUsuarioInput>, OngUncheckedUpdateWithoutUsuarioInput>
  }

  export type VoluntarioUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<VoluntarioCreateWithoutUsuarioInput, VoluntarioUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutUsuarioInput
    upsert?: VoluntarioUpsertWithoutUsuarioInput
    disconnect?: VoluntarioWhereInput | boolean
    delete?: VoluntarioWhereInput | boolean
    connect?: VoluntarioWhereUniqueInput
    update?: XOR<XOR<VoluntarioUpdateToOneWithWhereWithoutUsuarioInput, VoluntarioUpdateWithoutUsuarioInput>, VoluntarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type OngUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<OngCreateWithoutUsuarioInput, OngUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OngCreateOrConnectWithoutUsuarioInput
    upsert?: OngUpsertWithoutUsuarioInput
    disconnect?: OngWhereInput | boolean
    delete?: OngWhereInput | boolean
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutUsuarioInput, OngUpdateWithoutUsuarioInput>, OngUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedOneWithoutVoluntarioInput = {
    create?: XOR<UsuarioCreateWithoutVoluntarioInput, UsuarioUncheckedCreateWithoutVoluntarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVoluntarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InscricaoCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<InscricaoCreateWithoutVoluntarioInput, InscricaoUncheckedCreateWithoutVoluntarioInput> | InscricaoCreateWithoutVoluntarioInput[] | InscricaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVoluntarioInput | InscricaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: InscricaoCreateManyVoluntarioInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<AvaliacaoCreateWithoutVoluntarioInput, AvaliacaoUncheckedCreateWithoutVoluntarioInput> | AvaliacaoCreateWithoutVoluntarioInput[] | AvaliacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutVoluntarioInput | AvaliacaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: AvaliacaoCreateManyVoluntarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type InscricaoUncheckedCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<InscricaoCreateWithoutVoluntarioInput, InscricaoUncheckedCreateWithoutVoluntarioInput> | InscricaoCreateWithoutVoluntarioInput[] | InscricaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVoluntarioInput | InscricaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: InscricaoCreateManyVoluntarioInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutVoluntarioInput = {
    create?: XOR<AvaliacaoCreateWithoutVoluntarioInput, AvaliacaoUncheckedCreateWithoutVoluntarioInput> | AvaliacaoCreateWithoutVoluntarioInput[] | AvaliacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutVoluntarioInput | AvaliacaoCreateOrConnectWithoutVoluntarioInput[]
    createMany?: AvaliacaoCreateManyVoluntarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutVoluntarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutVoluntarioInput, UsuarioUncheckedCreateWithoutVoluntarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVoluntarioInput
    upsert?: UsuarioUpsertWithoutVoluntarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVoluntarioInput, UsuarioUpdateWithoutVoluntarioInput>, UsuarioUncheckedUpdateWithoutVoluntarioInput>
  }

  export type InscricaoUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<InscricaoCreateWithoutVoluntarioInput, InscricaoUncheckedCreateWithoutVoluntarioInput> | InscricaoCreateWithoutVoluntarioInput[] | InscricaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVoluntarioInput | InscricaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutVoluntarioInput | InscricaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: InscricaoCreateManyVoluntarioInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutVoluntarioInput | InscricaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutVoluntarioInput | InscricaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutVoluntarioInput, AvaliacaoUncheckedCreateWithoutVoluntarioInput> | AvaliacaoCreateWithoutVoluntarioInput[] | AvaliacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutVoluntarioInput | AvaliacaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutVoluntarioInput | AvaliacaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: AvaliacaoCreateManyVoluntarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutVoluntarioInput | AvaliacaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutVoluntarioInput | AvaliacaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type InscricaoUncheckedUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<InscricaoCreateWithoutVoluntarioInput, InscricaoUncheckedCreateWithoutVoluntarioInput> | InscricaoCreateWithoutVoluntarioInput[] | InscricaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVoluntarioInput | InscricaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutVoluntarioInput | InscricaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: InscricaoCreateManyVoluntarioInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutVoluntarioInput | InscricaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutVoluntarioInput | InscricaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutVoluntarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutVoluntarioInput, AvaliacaoUncheckedCreateWithoutVoluntarioInput> | AvaliacaoCreateWithoutVoluntarioInput[] | AvaliacaoUncheckedCreateWithoutVoluntarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutVoluntarioInput | AvaliacaoCreateOrConnectWithoutVoluntarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutVoluntarioInput | AvaliacaoUpsertWithWhereUniqueWithoutVoluntarioInput[]
    createMany?: AvaliacaoCreateManyVoluntarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutVoluntarioInput | AvaliacaoUpdateWithWhereUniqueWithoutVoluntarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutVoluntarioInput | AvaliacaoUpdateManyWithWhereWithoutVoluntarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutOngInput = {
    create?: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOngInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VagaCreateNestedManyWithoutOngInput = {
    create?: XOR<VagaCreateWithoutOngInput, VagaUncheckedCreateWithoutOngInput> | VagaCreateWithoutOngInput[] | VagaUncheckedCreateWithoutOngInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutOngInput | VagaCreateOrConnectWithoutOngInput[]
    createMany?: VagaCreateManyOngInputEnvelope
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutOngInput = {
    create?: XOR<AvaliacaoCreateWithoutOngInput, AvaliacaoUncheckedCreateWithoutOngInput> | AvaliacaoCreateWithoutOngInput[] | AvaliacaoUncheckedCreateWithoutOngInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutOngInput | AvaliacaoCreateOrConnectWithoutOngInput[]
    createMany?: AvaliacaoCreateManyOngInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type VagaUncheckedCreateNestedManyWithoutOngInput = {
    create?: XOR<VagaCreateWithoutOngInput, VagaUncheckedCreateWithoutOngInput> | VagaCreateWithoutOngInput[] | VagaUncheckedCreateWithoutOngInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutOngInput | VagaCreateOrConnectWithoutOngInput[]
    createMany?: VagaCreateManyOngInputEnvelope
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutOngInput = {
    create?: XOR<AvaliacaoCreateWithoutOngInput, AvaliacaoUncheckedCreateWithoutOngInput> | AvaliacaoCreateWithoutOngInput[] | AvaliacaoUncheckedCreateWithoutOngInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutOngInput | AvaliacaoCreateOrConnectWithoutOngInput[]
    createMany?: AvaliacaoCreateManyOngInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutOngNestedInput = {
    create?: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOngInput
    upsert?: UsuarioUpsertWithoutOngInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOngInput, UsuarioUpdateWithoutOngInput>, UsuarioUncheckedUpdateWithoutOngInput>
  }

  export type VagaUpdateManyWithoutOngNestedInput = {
    create?: XOR<VagaCreateWithoutOngInput, VagaUncheckedCreateWithoutOngInput> | VagaCreateWithoutOngInput[] | VagaUncheckedCreateWithoutOngInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutOngInput | VagaCreateOrConnectWithoutOngInput[]
    upsert?: VagaUpsertWithWhereUniqueWithoutOngInput | VagaUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: VagaCreateManyOngInputEnvelope
    set?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    disconnect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    delete?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    update?: VagaUpdateWithWhereUniqueWithoutOngInput | VagaUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: VagaUpdateManyWithWhereWithoutOngInput | VagaUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: VagaScalarWhereInput | VagaScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutOngNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutOngInput, AvaliacaoUncheckedCreateWithoutOngInput> | AvaliacaoCreateWithoutOngInput[] | AvaliacaoUncheckedCreateWithoutOngInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutOngInput | AvaliacaoCreateOrConnectWithoutOngInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutOngInput | AvaliacaoUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: AvaliacaoCreateManyOngInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutOngInput | AvaliacaoUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutOngInput | AvaliacaoUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type VagaUncheckedUpdateManyWithoutOngNestedInput = {
    create?: XOR<VagaCreateWithoutOngInput, VagaUncheckedCreateWithoutOngInput> | VagaCreateWithoutOngInput[] | VagaUncheckedCreateWithoutOngInput[]
    connectOrCreate?: VagaCreateOrConnectWithoutOngInput | VagaCreateOrConnectWithoutOngInput[]
    upsert?: VagaUpsertWithWhereUniqueWithoutOngInput | VagaUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: VagaCreateManyOngInputEnvelope
    set?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    disconnect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    delete?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    connect?: VagaWhereUniqueInput | VagaWhereUniqueInput[]
    update?: VagaUpdateWithWhereUniqueWithoutOngInput | VagaUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: VagaUpdateManyWithWhereWithoutOngInput | VagaUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: VagaScalarWhereInput | VagaScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutOngNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutOngInput, AvaliacaoUncheckedCreateWithoutOngInput> | AvaliacaoCreateWithoutOngInput[] | AvaliacaoUncheckedCreateWithoutOngInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutOngInput | AvaliacaoCreateOrConnectWithoutOngInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutOngInput | AvaliacaoUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: AvaliacaoCreateManyOngInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutOngInput | AvaliacaoUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutOngInput | AvaliacaoUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type OngCreateNestedOneWithoutVagasInput = {
    create?: XOR<OngCreateWithoutVagasInput, OngUncheckedCreateWithoutVagasInput>
    connectOrCreate?: OngCreateOrConnectWithoutVagasInput
    connect?: OngWhereUniqueInput
  }

  export type InscricaoCreateNestedManyWithoutVagaInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type InscricaoUncheckedCreateNestedManyWithoutVagaInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
  }

  export type OngUpdateOneRequiredWithoutVagasNestedInput = {
    create?: XOR<OngCreateWithoutVagasInput, OngUncheckedCreateWithoutVagasInput>
    connectOrCreate?: OngCreateOrConnectWithoutVagasInput
    upsert?: OngUpsertWithoutVagasInput
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutVagasInput, OngUpdateWithoutVagasInput>, OngUncheckedUpdateWithoutVagasInput>
  }

  export type InscricaoUpdateManyWithoutVagaNestedInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutVagaInput | InscricaoUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutVagaInput | InscricaoUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutVagaInput | InscricaoUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type InscricaoUncheckedUpdateManyWithoutVagaNestedInput = {
    create?: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput> | InscricaoCreateWithoutVagaInput[] | InscricaoUncheckedCreateWithoutVagaInput[]
    connectOrCreate?: InscricaoCreateOrConnectWithoutVagaInput | InscricaoCreateOrConnectWithoutVagaInput[]
    upsert?: InscricaoUpsertWithWhereUniqueWithoutVagaInput | InscricaoUpsertWithWhereUniqueWithoutVagaInput[]
    createMany?: InscricaoCreateManyVagaInputEnvelope
    set?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    disconnect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    delete?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    connect?: InscricaoWhereUniqueInput | InscricaoWhereUniqueInput[]
    update?: InscricaoUpdateWithWhereUniqueWithoutVagaInput | InscricaoUpdateWithWhereUniqueWithoutVagaInput[]
    updateMany?: InscricaoUpdateManyWithWhereWithoutVagaInput | InscricaoUpdateManyWithWhereWithoutVagaInput[]
    deleteMany?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
  }

  export type VoluntarioCreateNestedOneWithoutInscricoesInput = {
    create?: XOR<VoluntarioCreateWithoutInscricoesInput, VoluntarioUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutInscricoesInput
    connect?: VoluntarioWhereUniqueInput
  }

  export type VagaCreateNestedOneWithoutInscricoesInput = {
    create?: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: VagaCreateOrConnectWithoutInscricoesInput
    connect?: VagaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VoluntarioUpdateOneRequiredWithoutInscricoesNestedInput = {
    create?: XOR<VoluntarioCreateWithoutInscricoesInput, VoluntarioUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutInscricoesInput
    upsert?: VoluntarioUpsertWithoutInscricoesInput
    connect?: VoluntarioWhereUniqueInput
    update?: XOR<XOR<VoluntarioUpdateToOneWithWhereWithoutInscricoesInput, VoluntarioUpdateWithoutInscricoesInput>, VoluntarioUncheckedUpdateWithoutInscricoesInput>
  }

  export type VagaUpdateOneRequiredWithoutInscricoesNestedInput = {
    create?: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
    connectOrCreate?: VagaCreateOrConnectWithoutInscricoesInput
    upsert?: VagaUpsertWithoutInscricoesInput
    connect?: VagaWhereUniqueInput
    update?: XOR<XOR<VagaUpdateToOneWithWhereWithoutInscricoesInput, VagaUpdateWithoutInscricoesInput>, VagaUncheckedUpdateWithoutInscricoesInput>
  }

  export type VoluntarioCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<VoluntarioCreateWithoutAvaliacaoInput, VoluntarioUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutAvaliacaoInput
    connect?: VoluntarioWhereUniqueInput
  }

  export type OngCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<OngCreateWithoutAvaliacaoInput, OngUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: OngCreateOrConnectWithoutAvaliacaoInput
    connect?: OngWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoluntarioUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<VoluntarioCreateWithoutAvaliacaoInput, VoluntarioUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: VoluntarioCreateOrConnectWithoutAvaliacaoInput
    upsert?: VoluntarioUpsertWithoutAvaliacaoInput
    connect?: VoluntarioWhereUniqueInput
    update?: XOR<XOR<VoluntarioUpdateToOneWithWhereWithoutAvaliacaoInput, VoluntarioUpdateWithoutAvaliacaoInput>, VoluntarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type OngUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<OngCreateWithoutAvaliacaoInput, OngUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: OngCreateOrConnectWithoutAvaliacaoInput
    upsert?: OngUpsertWithoutAvaliacaoInput
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutAvaliacaoInput, OngUpdateWithoutAvaliacaoInput>, OngUncheckedUpdateWithoutAvaliacaoInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type VoluntarioCreateWithoutUsuarioInput = {
    id?: string
    interesses: string
    habilidades: string
    disponibilidade: string
    inscricoes?: InscricaoCreateNestedManyWithoutVoluntarioInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    interesses: string
    habilidades: string
    disponibilidade: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVoluntarioInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioCreateOrConnectWithoutUsuarioInput = {
    where: VoluntarioWhereUniqueInput
    create: XOR<VoluntarioCreateWithoutUsuarioInput, VoluntarioUncheckedCreateWithoutUsuarioInput>
  }

  export type OngCreateWithoutUsuarioInput = {
    id?: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    vagas?: VagaCreateNestedManyWithoutOngInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateWithoutUsuarioInput = {
    id?: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    vagas?: VagaUncheckedCreateNestedManyWithoutOngInput
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngCreateOrConnectWithoutUsuarioInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutUsuarioInput, OngUncheckedCreateWithoutUsuarioInput>
  }

  export type VoluntarioUpsertWithoutUsuarioInput = {
    update: XOR<VoluntarioUpdateWithoutUsuarioInput, VoluntarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VoluntarioCreateWithoutUsuarioInput, VoluntarioUncheckedCreateWithoutUsuarioInput>
    where?: VoluntarioWhereInput
  }

  export type VoluntarioUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: VoluntarioWhereInput
    data: XOR<VoluntarioUpdateWithoutUsuarioInput, VoluntarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type VoluntarioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUpdateManyWithoutVoluntarioNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVoluntarioNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type OngUpsertWithoutUsuarioInput = {
    update: XOR<OngUpdateWithoutUsuarioInput, OngUncheckedUpdateWithoutUsuarioInput>
    create: XOR<OngCreateWithoutUsuarioInput, OngUncheckedCreateWithoutUsuarioInput>
    where?: OngWhereInput
  }

  export type OngUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: OngWhereInput
    data: XOR<OngUpdateWithoutUsuarioInput, OngUncheckedUpdateWithoutUsuarioInput>
  }

  export type OngUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    vagas?: VagaUpdateManyWithoutOngNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    vagas?: VagaUncheckedUpdateManyWithoutOngNestedInput
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutOngNestedInput
  }

  export type UsuarioCreateWithoutVoluntarioInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
    ong?: OngCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutVoluntarioInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
    ong?: OngUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutVoluntarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVoluntarioInput, UsuarioUncheckedCreateWithoutVoluntarioInput>
  }

  export type InscricaoCreateWithoutVoluntarioInput = {
    id?: string
    data?: Date | string
    status: string
    vaga: VagaCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateWithoutVoluntarioInput = {
    id?: string
    vagaId: string
    data?: Date | string
    status: string
  }

  export type InscricaoCreateOrConnectWithoutVoluntarioInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutVoluntarioInput, InscricaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type InscricaoCreateManyVoluntarioInputEnvelope = {
    data: InscricaoCreateManyVoluntarioInput | InscricaoCreateManyVoluntarioInput[]
  }

  export type AvaliacaoCreateWithoutVoluntarioInput = {
    id?: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
    ong: OngCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutVoluntarioInput = {
    id?: string
    ongId: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
  }

  export type AvaliacaoCreateOrConnectWithoutVoluntarioInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutVoluntarioInput, AvaliacaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type AvaliacaoCreateManyVoluntarioInputEnvelope = {
    data: AvaliacaoCreateManyVoluntarioInput | AvaliacaoCreateManyVoluntarioInput[]
  }

  export type UsuarioUpsertWithoutVoluntarioInput = {
    update: XOR<UsuarioUpdateWithoutVoluntarioInput, UsuarioUncheckedUpdateWithoutVoluntarioInput>
    create: XOR<UsuarioCreateWithoutVoluntarioInput, UsuarioUncheckedCreateWithoutVoluntarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVoluntarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVoluntarioInput, UsuarioUncheckedUpdateWithoutVoluntarioInput>
  }

  export type UsuarioUpdateWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    ong?: OngUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    ong?: OngUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type InscricaoUpsertWithWhereUniqueWithoutVoluntarioInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutVoluntarioInput, InscricaoUncheckedUpdateWithoutVoluntarioInput>
    create: XOR<InscricaoCreateWithoutVoluntarioInput, InscricaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutVoluntarioInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutVoluntarioInput, InscricaoUncheckedUpdateWithoutVoluntarioInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutVoluntarioInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutVoluntarioInput>
  }

  export type InscricaoScalarWhereInput = {
    AND?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    OR?: InscricaoScalarWhereInput[]
    NOT?: InscricaoScalarWhereInput | InscricaoScalarWhereInput[]
    id?: StringFilter<"Inscricao"> | string
    voluntarioId?: StringFilter<"Inscricao"> | string
    vagaId?: StringFilter<"Inscricao"> | string
    data?: DateTimeFilter<"Inscricao"> | Date | string
    status?: StringFilter<"Inscricao"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutVoluntarioInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutVoluntarioInput, AvaliacaoUncheckedUpdateWithoutVoluntarioInput>
    create: XOR<AvaliacaoCreateWithoutVoluntarioInput, AvaliacaoUncheckedCreateWithoutVoluntarioInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutVoluntarioInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutVoluntarioInput, AvaliacaoUncheckedUpdateWithoutVoluntarioInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutVoluntarioInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutVoluntarioInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    voluntarioId?: StringFilter<"Avaliacao"> | string
    ongId?: StringFilter<"Avaliacao"> | string
    data?: DateTimeFilter<"Avaliacao"> | Date | string
    frequecia?: StringNullableFilter<"Avaliacao"> | string | null
    tipo?: StringFilter<"Avaliacao"> | string
    comentario?: StringFilter<"Avaliacao"> | string
    nota?: IntFilter<"Avaliacao"> | number
  }

  export type UsuarioCreateWithoutOngInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
    voluntario?: VoluntarioCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutOngInput = {
    id?: string
    nome: string
    email: string
    senha: string
    imagem?: string | null
    tipo: string
    voluntario?: VoluntarioUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutOngInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
  }

  export type VagaCreateWithoutOngInput = {
    id?: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
    inscricoes?: InscricaoCreateNestedManyWithoutVagaInput
  }

  export type VagaUncheckedCreateWithoutOngInput = {
    id?: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVagaInput
  }

  export type VagaCreateOrConnectWithoutOngInput = {
    where: VagaWhereUniqueInput
    create: XOR<VagaCreateWithoutOngInput, VagaUncheckedCreateWithoutOngInput>
  }

  export type VagaCreateManyOngInputEnvelope = {
    data: VagaCreateManyOngInput | VagaCreateManyOngInput[]
  }

  export type AvaliacaoCreateWithoutOngInput = {
    id?: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
    voluntario: VoluntarioCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutOngInput = {
    id?: string
    voluntarioId: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
  }

  export type AvaliacaoCreateOrConnectWithoutOngInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutOngInput, AvaliacaoUncheckedCreateWithoutOngInput>
  }

  export type AvaliacaoCreateManyOngInputEnvelope = {
    data: AvaliacaoCreateManyOngInput | AvaliacaoCreateManyOngInput[]
  }

  export type UsuarioUpsertWithoutOngInput = {
    update: XOR<UsuarioUpdateWithoutOngInput, UsuarioUncheckedUpdateWithoutOngInput>
    create: XOR<UsuarioCreateWithoutOngInput, UsuarioUncheckedCreateWithoutOngInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOngInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOngInput, UsuarioUncheckedUpdateWithoutOngInput>
  }

  export type UsuarioUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    voluntario?: VoluntarioUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    voluntario?: VoluntarioUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type VagaUpsertWithWhereUniqueWithoutOngInput = {
    where: VagaWhereUniqueInput
    update: XOR<VagaUpdateWithoutOngInput, VagaUncheckedUpdateWithoutOngInput>
    create: XOR<VagaCreateWithoutOngInput, VagaUncheckedCreateWithoutOngInput>
  }

  export type VagaUpdateWithWhereUniqueWithoutOngInput = {
    where: VagaWhereUniqueInput
    data: XOR<VagaUpdateWithoutOngInput, VagaUncheckedUpdateWithoutOngInput>
  }

  export type VagaUpdateManyWithWhereWithoutOngInput = {
    where: VagaScalarWhereInput
    data: XOR<VagaUpdateManyMutationInput, VagaUncheckedUpdateManyWithoutOngInput>
  }

  export type VagaScalarWhereInput = {
    AND?: VagaScalarWhereInput | VagaScalarWhereInput[]
    OR?: VagaScalarWhereInput[]
    NOT?: VagaScalarWhereInput | VagaScalarWhereInput[]
    id?: StringFilter<"Vaga"> | string
    ongId?: StringFilter<"Vaga"> | string
    descricao?: StringFilter<"Vaga"> | string
    requesitos?: StringFilter<"Vaga"> | string
    status?: StringFilter<"Vaga"> | string
    duracao?: StringFilter<"Vaga"> | string
    localizacao?: StringFilter<"Vaga"> | string
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutOngInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutOngInput, AvaliacaoUncheckedUpdateWithoutOngInput>
    create: XOR<AvaliacaoCreateWithoutOngInput, AvaliacaoUncheckedCreateWithoutOngInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutOngInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutOngInput, AvaliacaoUncheckedUpdateWithoutOngInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutOngInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutOngInput>
  }

  export type OngCreateWithoutVagasInput = {
    id?: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    usuario: UsuarioCreateNestedOneWithoutOngInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateWithoutVagasInput = {
    id?: string
    usuarioId: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngCreateOrConnectWithoutVagasInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutVagasInput, OngUncheckedCreateWithoutVagasInput>
  }

  export type InscricaoCreateWithoutVagaInput = {
    id?: string
    data?: Date | string
    status: string
    voluntario: VoluntarioCreateNestedOneWithoutInscricoesInput
  }

  export type InscricaoUncheckedCreateWithoutVagaInput = {
    id?: string
    voluntarioId: string
    data?: Date | string
    status: string
  }

  export type InscricaoCreateOrConnectWithoutVagaInput = {
    where: InscricaoWhereUniqueInput
    create: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput>
  }

  export type InscricaoCreateManyVagaInputEnvelope = {
    data: InscricaoCreateManyVagaInput | InscricaoCreateManyVagaInput[]
  }

  export type OngUpsertWithoutVagasInput = {
    update: XOR<OngUpdateWithoutVagasInput, OngUncheckedUpdateWithoutVagasInput>
    create: XOR<OngCreateWithoutVagasInput, OngUncheckedCreateWithoutVagasInput>
    where?: OngWhereInput
  }

  export type OngUpdateToOneWithWhereWithoutVagasInput = {
    where?: OngWhereInput
    data: XOR<OngUpdateWithoutVagasInput, OngUncheckedUpdateWithoutVagasInput>
  }

  export type OngUpdateWithoutVagasInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutOngNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateWithoutVagasInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutOngNestedInput
  }

  export type InscricaoUpsertWithWhereUniqueWithoutVagaInput = {
    where: InscricaoWhereUniqueInput
    update: XOR<InscricaoUpdateWithoutVagaInput, InscricaoUncheckedUpdateWithoutVagaInput>
    create: XOR<InscricaoCreateWithoutVagaInput, InscricaoUncheckedCreateWithoutVagaInput>
  }

  export type InscricaoUpdateWithWhereUniqueWithoutVagaInput = {
    where: InscricaoWhereUniqueInput
    data: XOR<InscricaoUpdateWithoutVagaInput, InscricaoUncheckedUpdateWithoutVagaInput>
  }

  export type InscricaoUpdateManyWithWhereWithoutVagaInput = {
    where: InscricaoScalarWhereInput
    data: XOR<InscricaoUpdateManyMutationInput, InscricaoUncheckedUpdateManyWithoutVagaInput>
  }

  export type VoluntarioCreateWithoutInscricoesInput = {
    id?: string
    interesses: string
    habilidades: string
    disponibilidade: string
    usuario: UsuarioCreateNestedOneWithoutVoluntarioInput
    avaliacao?: AvaliacaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateWithoutInscricoesInput = {
    id?: string
    usuarioId: string
    interesses: string
    habilidades: string
    disponibilidade: string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioCreateOrConnectWithoutInscricoesInput = {
    where: VoluntarioWhereUniqueInput
    create: XOR<VoluntarioCreateWithoutInscricoesInput, VoluntarioUncheckedCreateWithoutInscricoesInput>
  }

  export type VagaCreateWithoutInscricoesInput = {
    id?: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
    ong: OngCreateNestedOneWithoutVagasInput
  }

  export type VagaUncheckedCreateWithoutInscricoesInput = {
    id?: string
    ongId: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
  }

  export type VagaCreateOrConnectWithoutInscricoesInput = {
    where: VagaWhereUniqueInput
    create: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
  }

  export type VoluntarioUpsertWithoutInscricoesInput = {
    update: XOR<VoluntarioUpdateWithoutInscricoesInput, VoluntarioUncheckedUpdateWithoutInscricoesInput>
    create: XOR<VoluntarioCreateWithoutInscricoesInput, VoluntarioUncheckedCreateWithoutInscricoesInput>
    where?: VoluntarioWhereInput
  }

  export type VoluntarioUpdateToOneWithWhereWithoutInscricoesInput = {
    where?: VoluntarioWhereInput
    data: XOR<VoluntarioUpdateWithoutInscricoesInput, VoluntarioUncheckedUpdateWithoutInscricoesInput>
  }

  export type VoluntarioUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVoluntarioNestedInput
    avaliacao?: AvaliacaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type VagaUpsertWithoutInscricoesInput = {
    update: XOR<VagaUpdateWithoutInscricoesInput, VagaUncheckedUpdateWithoutInscricoesInput>
    create: XOR<VagaCreateWithoutInscricoesInput, VagaUncheckedCreateWithoutInscricoesInput>
    where?: VagaWhereInput
  }

  export type VagaUpdateToOneWithWhereWithoutInscricoesInput = {
    where?: VagaWhereInput
    data: XOR<VagaUpdateWithoutInscricoesInput, VagaUncheckedUpdateWithoutInscricoesInput>
  }

  export type VagaUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    ong?: OngUpdateOneRequiredWithoutVagasNestedInput
  }

  export type VagaUncheckedUpdateWithoutInscricoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type VoluntarioCreateWithoutAvaliacaoInput = {
    id?: string
    interesses: string
    habilidades: string
    disponibilidade: string
    usuario: UsuarioCreateNestedOneWithoutVoluntarioInput
    inscricoes?: InscricaoCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    usuarioId: string
    interesses: string
    habilidades: string
    disponibilidade: string
    inscricoes?: InscricaoUncheckedCreateNestedManyWithoutVoluntarioInput
  }

  export type VoluntarioCreateOrConnectWithoutAvaliacaoInput = {
    where: VoluntarioWhereUniqueInput
    create: XOR<VoluntarioCreateWithoutAvaliacaoInput, VoluntarioUncheckedCreateWithoutAvaliacaoInput>
  }

  export type OngCreateWithoutAvaliacaoInput = {
    id?: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    usuario: UsuarioCreateNestedOneWithoutOngInput
    vagas?: VagaCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    usuarioId: string
    cnpj: string
    descricao: string
    visao: string
    areaAtuacao: string
    endereco: string
    vagas?: VagaUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngCreateOrConnectWithoutAvaliacaoInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutAvaliacaoInput, OngUncheckedCreateWithoutAvaliacaoInput>
  }

  export type VoluntarioUpsertWithoutAvaliacaoInput = {
    update: XOR<VoluntarioUpdateWithoutAvaliacaoInput, VoluntarioUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<VoluntarioCreateWithoutAvaliacaoInput, VoluntarioUncheckedCreateWithoutAvaliacaoInput>
    where?: VoluntarioWhereInput
  }

  export type VoluntarioUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: VoluntarioWhereInput
    data: XOR<VoluntarioUpdateWithoutAvaliacaoInput, VoluntarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type VoluntarioUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutVoluntarioNestedInput
    inscricoes?: InscricaoUpdateManyWithoutVoluntarioNestedInput
  }

  export type VoluntarioUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    interesses?: StringFieldUpdateOperationsInput | string
    habilidades?: StringFieldUpdateOperationsInput | string
    disponibilidade?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVoluntarioNestedInput
  }

  export type OngUpsertWithoutAvaliacaoInput = {
    update: XOR<OngUpdateWithoutAvaliacaoInput, OngUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<OngCreateWithoutAvaliacaoInput, OngUncheckedCreateWithoutAvaliacaoInput>
    where?: OngWhereInput
  }

  export type OngUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: OngWhereInput
    data: XOR<OngUpdateWithoutAvaliacaoInput, OngUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type OngUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutOngNestedInput
    vagas?: VagaUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    visao?: StringFieldUpdateOperationsInput | string
    areaAtuacao?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    vagas?: VagaUncheckedUpdateManyWithoutOngNestedInput
  }

  export type InscricaoCreateManyVoluntarioInput = {
    id?: string
    vagaId: string
    data?: Date | string
    status: string
  }

  export type AvaliacaoCreateManyVoluntarioInput = {
    id?: string
    ongId: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
  }

  export type InscricaoUpdateWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    vaga?: VagaUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoUncheckedUpdateManyWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vagaId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    ong?: OngUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUncheckedUpdateManyWithoutVoluntarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    ongId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type VagaCreateManyOngInput = {
    id?: string
    descricao: string
    requesitos: string
    status: string
    duracao: string
    localizacao: string
  }

  export type AvaliacaoCreateManyOngInput = {
    id?: string
    voluntarioId: string
    data?: Date | string
    frequecia?: string | null
    tipo: string
    comentario: string
    nota: number
  }

  export type VagaUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUpdateManyWithoutVagaNestedInput
  }

  export type VagaUncheckedUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    inscricoes?: InscricaoUncheckedUpdateManyWithoutVagaNestedInput
  }

  export type VagaUncheckedUpdateManyWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    requesitos?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duracao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
    voluntario?: VoluntarioUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUncheckedUpdateManyWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    frequecia?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    comentario?: StringFieldUpdateOperationsInput | string
    nota?: IntFieldUpdateOperationsInput | number
  }

  export type InscricaoCreateManyVagaInput = {
    id?: string
    voluntarioId: string
    data?: Date | string
    status: string
  }

  export type InscricaoUpdateWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    voluntario?: VoluntarioUpdateOneRequiredWithoutInscricoesNestedInput
  }

  export type InscricaoUncheckedUpdateWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InscricaoUncheckedUpdateManyWithoutVagaInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntarioId?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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