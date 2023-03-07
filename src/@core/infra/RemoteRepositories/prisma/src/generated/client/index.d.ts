
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Category
 * 
 */
export type Category = {
  Id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Supplier
 * 
 */
export type Supplier = {
  Id: string
  name: string
  contact: number
  email: string | null
  eccomerce: string | null
  instragramUrl: string | null
  rate: number | null
  categoryId: string
  createAt: Date
  updatedAt: Date
}

/**
 * Model Costumer
 * 
 */
export type Costumer = {
  Id: string
  name: string
  email: string
  phoneNumber: string | null
  password: string
  paymentStatus: string
  paymentDate: Date
  paymentdueDate: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model FavoriteCostumerSupplier
 * 
 */
export type FavoriteCostumerSupplier = {
  CostumerId: string
  SupplierId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<GlobalReject>;

  /**
   * `prisma.costumer`: Exposes CRUD operations for the **Costumer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Costumers
    * const costumers = await prisma.costumer.findMany()
    * ```
    */
  get costumer(): Prisma.CostumerDelegate<GlobalReject>;

  /**
   * `prisma.favoriteCostumerSupplier`: Exposes CRUD operations for the **FavoriteCostumerSupplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteCostumerSuppliers
    * const favoriteCostumerSuppliers = await prisma.favoriteCostumerSupplier.findMany()
    * ```
    */
  get favoriteCostumerSupplier(): Prisma.FavoriteCostumerSupplierDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Supplier: 'Supplier',
    Costumer: 'Costumer',
    FavoriteCostumerSupplier: 'FavoriteCostumerSupplier'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    suppliers: number
  }

  export type CategoryCountOutputTypeSelect = {
    suppliers?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type SupplierCountOutputType
   */


  export type SupplierCountOutputType = {
    favoriteSuppliers: number
  }

  export type SupplierCountOutputTypeSelect = {
    favoriteSuppliers?: boolean
  }

  export type SupplierCountOutputTypeGetPayload<S extends boolean | null | undefined | SupplierCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SupplierCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SupplierCountOutputTypeArgs)
    ? SupplierCountOutputType 
    : S extends { select: any } & (SupplierCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SupplierCountOutputType ? SupplierCountOutputType[P] : never
  } 
      : SupplierCountOutputType




  // Custom InputTypes

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect | null
  }



  /**
   * Count Type CostumerCountOutputType
   */


  export type CostumerCountOutputType = {
    FavoriteSuppliers: number
  }

  export type CostumerCountOutputTypeSelect = {
    FavoriteSuppliers?: boolean
  }

  export type CostumerCountOutputTypeGetPayload<S extends boolean | null | undefined | CostumerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CostumerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CostumerCountOutputTypeArgs)
    ? CostumerCountOutputType 
    : S extends { select: any } & (CostumerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CostumerCountOutputType ? CostumerCountOutputType[P] : never
  } 
      : CostumerCountOutputType




  // Custom InputTypes

  /**
   * CostumerCountOutputType without action
   */
  export type CostumerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CostumerCountOutputType
     */
    select?: CostumerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    Id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    Id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    Id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    Id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    Id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    Id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    Id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    Id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    suppliers?: boolean | Category$suppliersArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    suppliers?: boolean | Category$suppliersArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'suppliers' ? Array < SupplierGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'suppliers' ? Array < SupplierGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    suppliers<T extends Category$suppliersArgs= {}>(args?: Subset<T, Category$suppliersArgs>): Prisma.PrismaPromise<Array<SupplierGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.suppliers
   */
  export type Category$suppliersArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    where?: SupplierWhereInput
    orderBy?: Enumerable<SupplierOrderByWithRelationInput>
    cursor?: SupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SupplierScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
  }



  /**
   * Model Supplier
   */


  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    contact: number | null
    rate: number | null
  }

  export type SupplierSumAggregateOutputType = {
    contact: number | null
    rate: number | null
  }

  export type SupplierMinAggregateOutputType = {
    Id: string | null
    name: string | null
    contact: number | null
    email: string | null
    eccomerce: string | null
    instragramUrl: string | null
    rate: number | null
    categoryId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    Id: string | null
    name: string | null
    contact: number | null
    email: string | null
    eccomerce: string | null
    instragramUrl: string | null
    rate: number | null
    categoryId: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    Id: number
    name: number
    contact: number
    email: number
    eccomerce: number
    instragramUrl: number
    rate: number
    categoryId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    contact?: true
    rate?: true
  }

  export type SupplierSumAggregateInputType = {
    contact?: true
    rate?: true
  }

  export type SupplierMinAggregateInputType = {
    Id?: true
    name?: true
    contact?: true
    email?: true
    eccomerce?: true
    instragramUrl?: true
    rate?: true
    categoryId?: true
    createAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    Id?: true
    name?: true
    contact?: true
    email?: true
    eccomerce?: true
    instragramUrl?: true
    rate?: true
    categoryId?: true
    createAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    Id?: true
    name?: true
    contact?: true
    email?: true
    eccomerce?: true
    instragramUrl?: true
    rate?: true
    categoryId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs = {
    where?: SupplierWhereInput
    orderBy?: Enumerable<SupplierOrderByWithAggregationInput>
    by: SupplierScalarFieldEnum[]
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }


  export type SupplierGroupByOutputType = {
    Id: string
    name: string
    contact: number
    email: string | null
    eccomerce: string | null
    instragramUrl: string | null
    rate: number | null
    categoryId: string
    createAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect = {
    Id?: boolean
    name?: boolean
    contact?: boolean
    email?: boolean
    eccomerce?: boolean
    instragramUrl?: boolean
    rate?: boolean
    categoryId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryArgs
    favoriteSuppliers?: boolean | Supplier$favoriteSuppliersArgs
    _count?: boolean | SupplierCountOutputTypeArgs
  }


  export type SupplierInclude = {
    category?: boolean | CategoryArgs
    favoriteSuppliers?: boolean | Supplier$favoriteSuppliersArgs
    _count?: boolean | SupplierCountOutputTypeArgs
  }

  export type SupplierGetPayload<S extends boolean | null | undefined | SupplierArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Supplier :
    S extends undefined ? never :
    S extends { include: any } & (SupplierArgs | SupplierFindManyArgs)
    ? Supplier  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends 'favoriteSuppliers' ? Array < FavoriteCostumerSupplierGetPayload<S['include'][P]>>  :
        P extends '_count' ? SupplierCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SupplierArgs | SupplierFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
        P extends 'favoriteSuppliers' ? Array < FavoriteCostumerSupplierGetPayload<S['select'][P]>>  :
        P extends '_count' ? SupplierCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Supplier ? Supplier[P] : never
  } 
      : Supplier


  type SupplierCountArgs = 
    Omit<SupplierFindManyArgs, 'select' | 'include'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SupplierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SupplierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Supplier'> extends True ? Prisma__SupplierClient<SupplierGetPayload<T>> : Prisma__SupplierClient<SupplierGetPayload<T> | null, null>

    /**
     * Find one Supplier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SupplierFindUniqueOrThrowArgs>
    ): Prisma__SupplierClient<SupplierGetPayload<T>>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SupplierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SupplierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Supplier'> extends True ? Prisma__SupplierClient<SupplierGetPayload<T>> : Prisma__SupplierClient<SupplierGetPayload<T> | null, null>

    /**
     * Find the first Supplier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SupplierFindFirstOrThrowArgs>
    ): Prisma__SupplierClient<SupplierGetPayload<T>>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends SupplierFindManyArgs>(
      args?: SelectSubset<T, SupplierFindManyArgs>
    ): Prisma.PrismaPromise<Array<SupplierGetPayload<T>>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
    **/
    create<T extends SupplierCreateArgs>(
      args: SelectSubset<T, SupplierCreateArgs>
    ): Prisma__SupplierClient<SupplierGetPayload<T>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
    **/
    delete<T extends SupplierDeleteArgs>(
      args: SelectSubset<T, SupplierDeleteArgs>
    ): Prisma__SupplierClient<SupplierGetPayload<T>>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SupplierUpdateArgs>(
      args: SelectSubset<T, SupplierUpdateArgs>
    ): Prisma__SupplierClient<SupplierGetPayload<T>>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SupplierDeleteManyArgs>(
      args?: SelectSubset<T, SupplierDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SupplierUpdateManyArgs>(
      args: SelectSubset<T, SupplierUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
    **/
    upsert<T extends SupplierUpsertArgs>(
      args: SelectSubset<T, SupplierUpsertArgs>
    ): Prisma__SupplierClient<SupplierGetPayload<T>>

    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SupplierClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    favoriteSuppliers<T extends Supplier$favoriteSuppliersArgs= {}>(args?: Subset<T, Supplier$favoriteSuppliersArgs>): Prisma.PrismaPromise<Array<FavoriteCostumerSupplierGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Supplier base type for findUnique actions
   */
  export type SupplierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUnique
   */
  export interface SupplierFindUniqueArgs extends SupplierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }


  /**
   * Supplier base type for findFirst actions
   */
  export type SupplierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Enumerable<SupplierScalarFieldEnum>
  }

  /**
   * Supplier findFirst
   */
  export interface SupplierFindFirstArgs extends SupplierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Enumerable<SupplierScalarFieldEnum>
  }


  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: Enumerable<SupplierScalarFieldEnum>
  }


  /**
   * Supplier create
   */
  export type SupplierCreateArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }


  /**
   * Supplier update
   */
  export type SupplierUpdateArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }


  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }


  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }


  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }


  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }


  /**
   * Supplier.favoriteSuppliers
   */
  export type Supplier$favoriteSuppliersArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    where?: FavoriteCostumerSupplierWhereInput
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithRelationInput>
    cursor?: FavoriteCostumerSupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FavoriteCostumerSupplierScalarFieldEnum>
  }


  /**
   * Supplier without action
   */
  export type SupplierArgs = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SupplierInclude | null
  }



  /**
   * Model Costumer
   */


  export type AggregateCostumer = {
    _count: CostumerCountAggregateOutputType | null
    _min: CostumerMinAggregateOutputType | null
    _max: CostumerMaxAggregateOutputType | null
  }

  export type CostumerMinAggregateOutputType = {
    Id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    paymentStatus: string | null
    paymentDate: Date | null
    paymentdueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CostumerMaxAggregateOutputType = {
    Id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    paymentStatus: string | null
    paymentDate: Date | null
    paymentdueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CostumerCountAggregateOutputType = {
    Id: number
    name: number
    email: number
    phoneNumber: number
    password: number
    paymentStatus: number
    paymentDate: number
    paymentdueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CostumerMinAggregateInputType = {
    Id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    paymentStatus?: true
    paymentDate?: true
    paymentdueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CostumerMaxAggregateInputType = {
    Id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    paymentStatus?: true
    paymentDate?: true
    paymentdueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CostumerCountAggregateInputType = {
    Id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    paymentStatus?: true
    paymentDate?: true
    paymentdueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CostumerAggregateArgs = {
    /**
     * Filter which Costumer to aggregate.
     */
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     */
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Costumers
    **/
    _count?: true | CostumerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CostumerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CostumerMaxAggregateInputType
  }

  export type GetCostumerAggregateType<T extends CostumerAggregateArgs> = {
        [P in keyof T & keyof AggregateCostumer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCostumer[P]>
      : GetScalarType<T[P], AggregateCostumer[P]>
  }




  export type CostumerGroupByArgs = {
    where?: CostumerWhereInput
    orderBy?: Enumerable<CostumerOrderByWithAggregationInput>
    by: CostumerScalarFieldEnum[]
    having?: CostumerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CostumerCountAggregateInputType | true
    _min?: CostumerMinAggregateInputType
    _max?: CostumerMaxAggregateInputType
  }


  export type CostumerGroupByOutputType = {
    Id: string
    name: string
    email: string
    phoneNumber: string | null
    password: string
    paymentStatus: string
    paymentDate: Date
    paymentdueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CostumerCountAggregateOutputType | null
    _min: CostumerMinAggregateOutputType | null
    _max: CostumerMaxAggregateOutputType | null
  }

  type GetCostumerGroupByPayload<T extends CostumerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CostumerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CostumerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CostumerGroupByOutputType[P]>
            : GetScalarType<T[P], CostumerGroupByOutputType[P]>
        }
      >
    >


  export type CostumerSelect = {
    Id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    paymentStatus?: boolean
    paymentDate?: boolean
    paymentdueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FavoriteSuppliers?: boolean | Costumer$FavoriteSuppliersArgs
    _count?: boolean | CostumerCountOutputTypeArgs
  }


  export type CostumerInclude = {
    FavoriteSuppliers?: boolean | Costumer$FavoriteSuppliersArgs
    _count?: boolean | CostumerCountOutputTypeArgs
  }

  export type CostumerGetPayload<S extends boolean | null | undefined | CostumerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Costumer :
    S extends undefined ? never :
    S extends { include: any } & (CostumerArgs | CostumerFindManyArgs)
    ? Costumer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'FavoriteSuppliers' ? Array < FavoriteCostumerSupplierGetPayload<S['include'][P]>>  :
        P extends '_count' ? CostumerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CostumerArgs | CostumerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'FavoriteSuppliers' ? Array < FavoriteCostumerSupplierGetPayload<S['select'][P]>>  :
        P extends '_count' ? CostumerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Costumer ? Costumer[P] : never
  } 
      : Costumer


  type CostumerCountArgs = 
    Omit<CostumerFindManyArgs, 'select' | 'include'> & {
      select?: CostumerCountAggregateInputType | true
    }

  export interface CostumerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Costumer that matches the filter.
     * @param {CostumerFindUniqueArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CostumerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CostumerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Costumer'> extends True ? Prisma__CostumerClient<CostumerGetPayload<T>> : Prisma__CostumerClient<CostumerGetPayload<T> | null, null>

    /**
     * Find one Costumer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CostumerFindUniqueOrThrowArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CostumerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CostumerFindUniqueOrThrowArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Find the first Costumer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerFindFirstArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CostumerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CostumerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Costumer'> extends True ? Prisma__CostumerClient<CostumerGetPayload<T>> : Prisma__CostumerClient<CostumerGetPayload<T> | null, null>

    /**
     * Find the first Costumer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerFindFirstOrThrowArgs} args - Arguments to find a Costumer
     * @example
     * // Get one Costumer
     * const costumer = await prisma.costumer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CostumerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CostumerFindFirstOrThrowArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Find zero or more Costumers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Costumers
     * const costumers = await prisma.costumer.findMany()
     * 
     * // Get first 10 Costumers
     * const costumers = await prisma.costumer.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const costumerWithIdOnly = await prisma.costumer.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends CostumerFindManyArgs>(
      args?: SelectSubset<T, CostumerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CostumerGetPayload<T>>>

    /**
     * Create a Costumer.
     * @param {CostumerCreateArgs} args - Arguments to create a Costumer.
     * @example
     * // Create one Costumer
     * const Costumer = await prisma.costumer.create({
     *   data: {
     *     // ... data to create a Costumer
     *   }
     * })
     * 
    **/
    create<T extends CostumerCreateArgs>(
      args: SelectSubset<T, CostumerCreateArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Delete a Costumer.
     * @param {CostumerDeleteArgs} args - Arguments to delete one Costumer.
     * @example
     * // Delete one Costumer
     * const Costumer = await prisma.costumer.delete({
     *   where: {
     *     // ... filter to delete one Costumer
     *   }
     * })
     * 
    **/
    delete<T extends CostumerDeleteArgs>(
      args: SelectSubset<T, CostumerDeleteArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Update one Costumer.
     * @param {CostumerUpdateArgs} args - Arguments to update one Costumer.
     * @example
     * // Update one Costumer
     * const costumer = await prisma.costumer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CostumerUpdateArgs>(
      args: SelectSubset<T, CostumerUpdateArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Delete zero or more Costumers.
     * @param {CostumerDeleteManyArgs} args - Arguments to filter Costumers to delete.
     * @example
     * // Delete a few Costumers
     * const { count } = await prisma.costumer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CostumerDeleteManyArgs>(
      args?: SelectSubset<T, CostumerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Costumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Costumers
     * const costumer = await prisma.costumer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CostumerUpdateManyArgs>(
      args: SelectSubset<T, CostumerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Costumer.
     * @param {CostumerUpsertArgs} args - Arguments to update or create a Costumer.
     * @example
     * // Update or create a Costumer
     * const costumer = await prisma.costumer.upsert({
     *   create: {
     *     // ... data to create a Costumer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Costumer we want to update
     *   }
     * })
    **/
    upsert<T extends CostumerUpsertArgs>(
      args: SelectSubset<T, CostumerUpsertArgs>
    ): Prisma__CostumerClient<CostumerGetPayload<T>>

    /**
     * Count the number of Costumers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerCountArgs} args - Arguments to filter Costumers to count.
     * @example
     * // Count the number of Costumers
     * const count = await prisma.costumer.count({
     *   where: {
     *     // ... the filter for the Costumers we want to count
     *   }
     * })
    **/
    count<T extends CostumerCountArgs>(
      args?: Subset<T, CostumerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CostumerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Costumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CostumerAggregateArgs>(args: Subset<T, CostumerAggregateArgs>): Prisma.PrismaPromise<GetCostumerAggregateType<T>>

    /**
     * Group by Costumer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CostumerGroupByArgs} args - Group by arguments.
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
      T extends CostumerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CostumerGroupByArgs['orderBy'] }
        : { orderBy?: CostumerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CostumerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCostumerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Costumer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CostumerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    FavoriteSuppliers<T extends Costumer$FavoriteSuppliersArgs= {}>(args?: Subset<T, Costumer$FavoriteSuppliersArgs>): Prisma.PrismaPromise<Array<FavoriteCostumerSupplierGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Costumer base type for findUnique actions
   */
  export type CostumerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     */
    where: CostumerWhereUniqueInput
  }

  /**
   * Costumer findUnique
   */
  export interface CostumerFindUniqueArgs extends CostumerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Costumer findUniqueOrThrow
   */
  export type CostumerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     */
    where: CostumerWhereUniqueInput
  }


  /**
   * Costumer base type for findFirst actions
   */
  export type CostumerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     */
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     */
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costumers.
     */
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumers.
     */
    distinct?: Enumerable<CostumerScalarFieldEnum>
  }

  /**
   * Costumer findFirst
   */
  export interface CostumerFindFirstArgs extends CostumerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Costumer findFirstOrThrow
   */
  export type CostumerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * Filter, which Costumer to fetch.
     */
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     */
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Costumers.
     */
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Costumers.
     */
    distinct?: Enumerable<CostumerScalarFieldEnum>
  }


  /**
   * Costumer findMany
   */
  export type CostumerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * Filter, which Costumers to fetch.
     */
    where?: CostumerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Costumers to fetch.
     */
    orderBy?: Enumerable<CostumerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Costumers.
     */
    cursor?: CostumerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Costumers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Costumers.
     */
    skip?: number
    distinct?: Enumerable<CostumerScalarFieldEnum>
  }


  /**
   * Costumer create
   */
  export type CostumerCreateArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * The data needed to create a Costumer.
     */
    data: XOR<CostumerCreateInput, CostumerUncheckedCreateInput>
  }


  /**
   * Costumer update
   */
  export type CostumerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * The data needed to update a Costumer.
     */
    data: XOR<CostumerUpdateInput, CostumerUncheckedUpdateInput>
    /**
     * Choose, which Costumer to update.
     */
    where: CostumerWhereUniqueInput
  }


  /**
   * Costumer updateMany
   */
  export type CostumerUpdateManyArgs = {
    /**
     * The data used to update Costumers.
     */
    data: XOR<CostumerUpdateManyMutationInput, CostumerUncheckedUpdateManyInput>
    /**
     * Filter which Costumers to update
     */
    where?: CostumerWhereInput
  }


  /**
   * Costumer upsert
   */
  export type CostumerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * The filter to search for the Costumer to update in case it exists.
     */
    where: CostumerWhereUniqueInput
    /**
     * In case the Costumer found by the `where` argument doesn't exist, create a new Costumer with this data.
     */
    create: XOR<CostumerCreateInput, CostumerUncheckedCreateInput>
    /**
     * In case the Costumer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CostumerUpdateInput, CostumerUncheckedUpdateInput>
  }


  /**
   * Costumer delete
   */
  export type CostumerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
    /**
     * Filter which Costumer to delete.
     */
    where: CostumerWhereUniqueInput
  }


  /**
   * Costumer deleteMany
   */
  export type CostumerDeleteManyArgs = {
    /**
     * Filter which Costumers to delete
     */
    where?: CostumerWhereInput
  }


  /**
   * Costumer.FavoriteSuppliers
   */
  export type Costumer$FavoriteSuppliersArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    where?: FavoriteCostumerSupplierWhereInput
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithRelationInput>
    cursor?: FavoriteCostumerSupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FavoriteCostumerSupplierScalarFieldEnum>
  }


  /**
   * Costumer without action
   */
  export type CostumerArgs = {
    /**
     * Select specific fields to fetch from the Costumer
     */
    select?: CostumerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CostumerInclude | null
  }



  /**
   * Model FavoriteCostumerSupplier
   */


  export type AggregateFavoriteCostumerSupplier = {
    _count: FavoriteCostumerSupplierCountAggregateOutputType | null
    _min: FavoriteCostumerSupplierMinAggregateOutputType | null
    _max: FavoriteCostumerSupplierMaxAggregateOutputType | null
  }

  export type FavoriteCostumerSupplierMinAggregateOutputType = {
    CostumerId: string | null
    SupplierId: string | null
  }

  export type FavoriteCostumerSupplierMaxAggregateOutputType = {
    CostumerId: string | null
    SupplierId: string | null
  }

  export type FavoriteCostumerSupplierCountAggregateOutputType = {
    CostumerId: number
    SupplierId: number
    _all: number
  }


  export type FavoriteCostumerSupplierMinAggregateInputType = {
    CostumerId?: true
    SupplierId?: true
  }

  export type FavoriteCostumerSupplierMaxAggregateInputType = {
    CostumerId?: true
    SupplierId?: true
  }

  export type FavoriteCostumerSupplierCountAggregateInputType = {
    CostumerId?: true
    SupplierId?: true
    _all?: true
  }

  export type FavoriteCostumerSupplierAggregateArgs = {
    /**
     * Filter which FavoriteCostumerSupplier to aggregate.
     */
    where?: FavoriteCostumerSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCostumerSuppliers to fetch.
     */
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteCostumerSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCostumerSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCostumerSuppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteCostumerSuppliers
    **/
    _count?: true | FavoriteCostumerSupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteCostumerSupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteCostumerSupplierMaxAggregateInputType
  }

  export type GetFavoriteCostumerSupplierAggregateType<T extends FavoriteCostumerSupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteCostumerSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteCostumerSupplier[P]>
      : GetScalarType<T[P], AggregateFavoriteCostumerSupplier[P]>
  }




  export type FavoriteCostumerSupplierGroupByArgs = {
    where?: FavoriteCostumerSupplierWhereInput
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithAggregationInput>
    by: FavoriteCostumerSupplierScalarFieldEnum[]
    having?: FavoriteCostumerSupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCostumerSupplierCountAggregateInputType | true
    _min?: FavoriteCostumerSupplierMinAggregateInputType
    _max?: FavoriteCostumerSupplierMaxAggregateInputType
  }


  export type FavoriteCostumerSupplierGroupByOutputType = {
    CostumerId: string
    SupplierId: string
    _count: FavoriteCostumerSupplierCountAggregateOutputType | null
    _min: FavoriteCostumerSupplierMinAggregateOutputType | null
    _max: FavoriteCostumerSupplierMaxAggregateOutputType | null
  }

  type GetFavoriteCostumerSupplierGroupByPayload<T extends FavoriteCostumerSupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FavoriteCostumerSupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteCostumerSupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteCostumerSupplierGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteCostumerSupplierGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteCostumerSupplierSelect = {
    CostumerId?: boolean
    SupplierId?: boolean
    Costumer?: boolean | CostumerArgs
    Supplier?: boolean | SupplierArgs
  }


  export type FavoriteCostumerSupplierInclude = {
    Costumer?: boolean | CostumerArgs
    Supplier?: boolean | SupplierArgs
  }

  export type FavoriteCostumerSupplierGetPayload<S extends boolean | null | undefined | FavoriteCostumerSupplierArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FavoriteCostumerSupplier :
    S extends undefined ? never :
    S extends { include: any } & (FavoriteCostumerSupplierArgs | FavoriteCostumerSupplierFindManyArgs)
    ? FavoriteCostumerSupplier  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Costumer' ? CostumerGetPayload<S['include'][P]> :
        P extends 'Supplier' ? SupplierGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FavoriteCostumerSupplierArgs | FavoriteCostumerSupplierFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Costumer' ? CostumerGetPayload<S['select'][P]> :
        P extends 'Supplier' ? SupplierGetPayload<S['select'][P]> :  P extends keyof FavoriteCostumerSupplier ? FavoriteCostumerSupplier[P] : never
  } 
      : FavoriteCostumerSupplier


  type FavoriteCostumerSupplierCountArgs = 
    Omit<FavoriteCostumerSupplierFindManyArgs, 'select' | 'include'> & {
      select?: FavoriteCostumerSupplierCountAggregateInputType | true
    }

  export interface FavoriteCostumerSupplierDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FavoriteCostumerSupplier that matches the filter.
     * @param {FavoriteCostumerSupplierFindUniqueArgs} args - Arguments to find a FavoriteCostumerSupplier
     * @example
     * // Get one FavoriteCostumerSupplier
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteCostumerSupplierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FavoriteCostumerSupplierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FavoriteCostumerSupplier'> extends True ? Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>> : Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T> | null, null>

    /**
     * Find one FavoriteCostumerSupplier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FavoriteCostumerSupplierFindUniqueOrThrowArgs} args - Arguments to find a FavoriteCostumerSupplier
     * @example
     * // Get one FavoriteCostumerSupplier
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoriteCostumerSupplierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FavoriteCostumerSupplierFindUniqueOrThrowArgs>
    ): Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>>

    /**
     * Find the first FavoriteCostumerSupplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierFindFirstArgs} args - Arguments to find a FavoriteCostumerSupplier
     * @example
     * // Get one FavoriteCostumerSupplier
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteCostumerSupplierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FavoriteCostumerSupplierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FavoriteCostumerSupplier'> extends True ? Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>> : Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T> | null, null>

    /**
     * Find the first FavoriteCostumerSupplier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierFindFirstOrThrowArgs} args - Arguments to find a FavoriteCostumerSupplier
     * @example
     * // Get one FavoriteCostumerSupplier
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoriteCostumerSupplierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FavoriteCostumerSupplierFindFirstOrThrowArgs>
    ): Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>>

    /**
     * Find zero or more FavoriteCostumerSuppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteCostumerSuppliers
     * const favoriteCostumerSuppliers = await prisma.favoriteCostumerSupplier.findMany()
     * 
     * // Get first 10 FavoriteCostumerSuppliers
     * const favoriteCostumerSuppliers = await prisma.favoriteCostumerSupplier.findMany({ take: 10 })
     * 
     * // Only select the `CostumerId`
     * const favoriteCostumerSupplierWithCostumerIdOnly = await prisma.favoriteCostumerSupplier.findMany({ select: { CostumerId: true } })
     * 
    **/
    findMany<T extends FavoriteCostumerSupplierFindManyArgs>(
      args?: SelectSubset<T, FavoriteCostumerSupplierFindManyArgs>
    ): Prisma.PrismaPromise<Array<FavoriteCostumerSupplierGetPayload<T>>>

    /**
     * Create a FavoriteCostumerSupplier.
     * @param {FavoriteCostumerSupplierCreateArgs} args - Arguments to create a FavoriteCostumerSupplier.
     * @example
     * // Create one FavoriteCostumerSupplier
     * const FavoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.create({
     *   data: {
     *     // ... data to create a FavoriteCostumerSupplier
     *   }
     * })
     * 
    **/
    create<T extends FavoriteCostumerSupplierCreateArgs>(
      args: SelectSubset<T, FavoriteCostumerSupplierCreateArgs>
    ): Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>>

    /**
     * Delete a FavoriteCostumerSupplier.
     * @param {FavoriteCostumerSupplierDeleteArgs} args - Arguments to delete one FavoriteCostumerSupplier.
     * @example
     * // Delete one FavoriteCostumerSupplier
     * const FavoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.delete({
     *   where: {
     *     // ... filter to delete one FavoriteCostumerSupplier
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteCostumerSupplierDeleteArgs>(
      args: SelectSubset<T, FavoriteCostumerSupplierDeleteArgs>
    ): Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>>

    /**
     * Update one FavoriteCostumerSupplier.
     * @param {FavoriteCostumerSupplierUpdateArgs} args - Arguments to update one FavoriteCostumerSupplier.
     * @example
     * // Update one FavoriteCostumerSupplier
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteCostumerSupplierUpdateArgs>(
      args: SelectSubset<T, FavoriteCostumerSupplierUpdateArgs>
    ): Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>>

    /**
     * Delete zero or more FavoriteCostumerSuppliers.
     * @param {FavoriteCostumerSupplierDeleteManyArgs} args - Arguments to filter FavoriteCostumerSuppliers to delete.
     * @example
     * // Delete a few FavoriteCostumerSuppliers
     * const { count } = await prisma.favoriteCostumerSupplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteCostumerSupplierDeleteManyArgs>(
      args?: SelectSubset<T, FavoriteCostumerSupplierDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteCostumerSuppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteCostumerSuppliers
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteCostumerSupplierUpdateManyArgs>(
      args: SelectSubset<T, FavoriteCostumerSupplierUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteCostumerSupplier.
     * @param {FavoriteCostumerSupplierUpsertArgs} args - Arguments to update or create a FavoriteCostumerSupplier.
     * @example
     * // Update or create a FavoriteCostumerSupplier
     * const favoriteCostumerSupplier = await prisma.favoriteCostumerSupplier.upsert({
     *   create: {
     *     // ... data to create a FavoriteCostumerSupplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteCostumerSupplier we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteCostumerSupplierUpsertArgs>(
      args: SelectSubset<T, FavoriteCostumerSupplierUpsertArgs>
    ): Prisma__FavoriteCostumerSupplierClient<FavoriteCostumerSupplierGetPayload<T>>

    /**
     * Count the number of FavoriteCostumerSuppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierCountArgs} args - Arguments to filter FavoriteCostumerSuppliers to count.
     * @example
     * // Count the number of FavoriteCostumerSuppliers
     * const count = await prisma.favoriteCostumerSupplier.count({
     *   where: {
     *     // ... the filter for the FavoriteCostumerSuppliers we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCostumerSupplierCountArgs>(
      args?: Subset<T, FavoriteCostumerSupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCostumerSupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteCostumerSupplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteCostumerSupplierAggregateArgs>(args: Subset<T, FavoriteCostumerSupplierAggregateArgs>): Prisma.PrismaPromise<GetFavoriteCostumerSupplierAggregateType<T>>

    /**
     * Group by FavoriteCostumerSupplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCostumerSupplierGroupByArgs} args - Group by arguments.
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
      T extends FavoriteCostumerSupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteCostumerSupplierGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteCostumerSupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoriteCostumerSupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteCostumerSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteCostumerSupplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FavoriteCostumerSupplierClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Costumer<T extends CostumerArgs= {}>(args?: Subset<T, CostumerArgs>): Prisma__CostumerClient<CostumerGetPayload<T> | Null>;

    Supplier<T extends SupplierArgs= {}>(args?: Subset<T, SupplierArgs>): Prisma__SupplierClient<SupplierGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FavoriteCostumerSupplier base type for findUnique actions
   */
  export type FavoriteCostumerSupplierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * Filter, which FavoriteCostumerSupplier to fetch.
     */
    where: FavoriteCostumerSupplierWhereUniqueInput
  }

  /**
   * FavoriteCostumerSupplier findUnique
   */
  export interface FavoriteCostumerSupplierFindUniqueArgs extends FavoriteCostumerSupplierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FavoriteCostumerSupplier findUniqueOrThrow
   */
  export type FavoriteCostumerSupplierFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * Filter, which FavoriteCostumerSupplier to fetch.
     */
    where: FavoriteCostumerSupplierWhereUniqueInput
  }


  /**
   * FavoriteCostumerSupplier base type for findFirst actions
   */
  export type FavoriteCostumerSupplierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * Filter, which FavoriteCostumerSupplier to fetch.
     */
    where?: FavoriteCostumerSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCostumerSuppliers to fetch.
     */
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteCostumerSuppliers.
     */
    cursor?: FavoriteCostumerSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCostumerSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCostumerSuppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteCostumerSuppliers.
     */
    distinct?: Enumerable<FavoriteCostumerSupplierScalarFieldEnum>
  }

  /**
   * FavoriteCostumerSupplier findFirst
   */
  export interface FavoriteCostumerSupplierFindFirstArgs extends FavoriteCostumerSupplierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FavoriteCostumerSupplier findFirstOrThrow
   */
  export type FavoriteCostumerSupplierFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * Filter, which FavoriteCostumerSupplier to fetch.
     */
    where?: FavoriteCostumerSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCostumerSuppliers to fetch.
     */
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteCostumerSuppliers.
     */
    cursor?: FavoriteCostumerSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCostumerSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCostumerSuppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteCostumerSuppliers.
     */
    distinct?: Enumerable<FavoriteCostumerSupplierScalarFieldEnum>
  }


  /**
   * FavoriteCostumerSupplier findMany
   */
  export type FavoriteCostumerSupplierFindManyArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * Filter, which FavoriteCostumerSuppliers to fetch.
     */
    where?: FavoriteCostumerSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteCostumerSuppliers to fetch.
     */
    orderBy?: Enumerable<FavoriteCostumerSupplierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteCostumerSuppliers.
     */
    cursor?: FavoriteCostumerSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteCostumerSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteCostumerSuppliers.
     */
    skip?: number
    distinct?: Enumerable<FavoriteCostumerSupplierScalarFieldEnum>
  }


  /**
   * FavoriteCostumerSupplier create
   */
  export type FavoriteCostumerSupplierCreateArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * The data needed to create a FavoriteCostumerSupplier.
     */
    data: XOR<FavoriteCostumerSupplierCreateInput, FavoriteCostumerSupplierUncheckedCreateInput>
  }


  /**
   * FavoriteCostumerSupplier update
   */
  export type FavoriteCostumerSupplierUpdateArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * The data needed to update a FavoriteCostumerSupplier.
     */
    data: XOR<FavoriteCostumerSupplierUpdateInput, FavoriteCostumerSupplierUncheckedUpdateInput>
    /**
     * Choose, which FavoriteCostumerSupplier to update.
     */
    where: FavoriteCostumerSupplierWhereUniqueInput
  }


  /**
   * FavoriteCostumerSupplier updateMany
   */
  export type FavoriteCostumerSupplierUpdateManyArgs = {
    /**
     * The data used to update FavoriteCostumerSuppliers.
     */
    data: XOR<FavoriteCostumerSupplierUpdateManyMutationInput, FavoriteCostumerSupplierUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteCostumerSuppliers to update
     */
    where?: FavoriteCostumerSupplierWhereInput
  }


  /**
   * FavoriteCostumerSupplier upsert
   */
  export type FavoriteCostumerSupplierUpsertArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * The filter to search for the FavoriteCostumerSupplier to update in case it exists.
     */
    where: FavoriteCostumerSupplierWhereUniqueInput
    /**
     * In case the FavoriteCostumerSupplier found by the `where` argument doesn't exist, create a new FavoriteCostumerSupplier with this data.
     */
    create: XOR<FavoriteCostumerSupplierCreateInput, FavoriteCostumerSupplierUncheckedCreateInput>
    /**
     * In case the FavoriteCostumerSupplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteCostumerSupplierUpdateInput, FavoriteCostumerSupplierUncheckedUpdateInput>
  }


  /**
   * FavoriteCostumerSupplier delete
   */
  export type FavoriteCostumerSupplierDeleteArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
    /**
     * Filter which FavoriteCostumerSupplier to delete.
     */
    where: FavoriteCostumerSupplierWhereUniqueInput
  }


  /**
   * FavoriteCostumerSupplier deleteMany
   */
  export type FavoriteCostumerSupplierDeleteManyArgs = {
    /**
     * Filter which FavoriteCostumerSuppliers to delete
     */
    where?: FavoriteCostumerSupplierWhereInput
  }


  /**
   * FavoriteCostumerSupplier without action
   */
  export type FavoriteCostumerSupplierArgs = {
    /**
     * Select specific fields to fetch from the FavoriteCostumerSupplier
     */
    select?: FavoriteCostumerSupplierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteCostumerSupplierInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryScalarFieldEnum: {
    Id: 'Id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CostumerScalarFieldEnum: {
    Id: 'Id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    paymentStatus: 'paymentStatus',
    paymentDate: 'paymentDate',
    paymentdueDate: 'paymentdueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CostumerScalarFieldEnum = (typeof CostumerScalarFieldEnum)[keyof typeof CostumerScalarFieldEnum]


  export const FavoriteCostumerSupplierScalarFieldEnum: {
    CostumerId: 'CostumerId',
    SupplierId: 'SupplierId'
  };

  export type FavoriteCostumerSupplierScalarFieldEnum = (typeof FavoriteCostumerSupplierScalarFieldEnum)[keyof typeof FavoriteCostumerSupplierScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const SupplierScalarFieldEnum: {
    Id: 'Id',
    name: 'name',
    contact: 'contact',
    email: 'email',
    eccomerce: 'eccomerce',
    instragramUrl: 'instragramUrl',
    rate: 'rate',
    categoryId: 'categoryId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    Id?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    suppliers?: SupplierListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    Id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    suppliers?: SupplierOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    Id?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    Id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    Id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SupplierWhereInput = {
    AND?: Enumerable<SupplierWhereInput>
    OR?: Enumerable<SupplierWhereInput>
    NOT?: Enumerable<SupplierWhereInput>
    Id?: StringFilter | string
    name?: StringFilter | string
    contact?: IntFilter | number
    email?: StringNullableFilter | string | null
    eccomerce?: StringNullableFilter | string | null
    instragramUrl?: StringNullableFilter | string | null
    rate?: IntNullableFilter | number | null
    categoryId?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    favoriteSuppliers?: FavoriteCostumerSupplierListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    Id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    eccomerce?: SortOrder
    instragramUrl?: SortOrder
    rate?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    favoriteSuppliers?: FavoriteCostumerSupplierOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = {
    Id?: string
  }

  export type SupplierOrderByWithAggregationInput = {
    Id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    eccomerce?: SortOrder
    instragramUrl?: SortOrder
    rate?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SupplierScalarWhereWithAggregatesInput>
    OR?: Enumerable<SupplierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SupplierScalarWhereWithAggregatesInput>
    Id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    contact?: IntWithAggregatesFilter | number
    email?: StringNullableWithAggregatesFilter | string | null
    eccomerce?: StringNullableWithAggregatesFilter | string | null
    instragramUrl?: StringNullableWithAggregatesFilter | string | null
    rate?: IntNullableWithAggregatesFilter | number | null
    categoryId?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CostumerWhereInput = {
    AND?: Enumerable<CostumerWhereInput>
    OR?: Enumerable<CostumerWhereInput>
    NOT?: Enumerable<CostumerWhereInput>
    Id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    phoneNumber?: StringNullableFilter | string | null
    password?: StringFilter | string
    paymentStatus?: StringFilter | string
    paymentDate?: DateTimeFilter | Date | string
    paymentdueDate?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    FavoriteSuppliers?: FavoriteCostumerSupplierListRelationFilter
  }

  export type CostumerOrderByWithRelationInput = {
    Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    paymentdueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FavoriteSuppliers?: FavoriteCostumerSupplierOrderByRelationAggregateInput
  }

  export type CostumerWhereUniqueInput = {
    Id?: string
    email?: string
  }

  export type CostumerOrderByWithAggregationInput = {
    Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    paymentdueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CostumerCountOrderByAggregateInput
    _max?: CostumerMaxOrderByAggregateInput
    _min?: CostumerMinOrderByAggregateInput
  }

  export type CostumerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CostumerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CostumerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CostumerScalarWhereWithAggregatesInput>
    Id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phoneNumber?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
    paymentStatus?: StringWithAggregatesFilter | string
    paymentDate?: DateTimeWithAggregatesFilter | Date | string
    paymentdueDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FavoriteCostumerSupplierWhereInput = {
    AND?: Enumerable<FavoriteCostumerSupplierWhereInput>
    OR?: Enumerable<FavoriteCostumerSupplierWhereInput>
    NOT?: Enumerable<FavoriteCostumerSupplierWhereInput>
    CostumerId?: StringFilter | string
    SupplierId?: StringFilter | string
    Costumer?: XOR<CostumerRelationFilter, CostumerWhereInput>
    Supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }

  export type FavoriteCostumerSupplierOrderByWithRelationInput = {
    CostumerId?: SortOrder
    SupplierId?: SortOrder
    Costumer?: CostumerOrderByWithRelationInput
    Supplier?: SupplierOrderByWithRelationInput
  }

  export type FavoriteCostumerSupplierWhereUniqueInput = {
    CostumerId_SupplierId?: FavoriteCostumerSupplierCostumerIdSupplierIdCompoundUniqueInput
  }

  export type FavoriteCostumerSupplierOrderByWithAggregationInput = {
    CostumerId?: SortOrder
    SupplierId?: SortOrder
    _count?: FavoriteCostumerSupplierCountOrderByAggregateInput
    _max?: FavoriteCostumerSupplierMaxOrderByAggregateInput
    _min?: FavoriteCostumerSupplierMinOrderByAggregateInput
  }

  export type FavoriteCostumerSupplierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FavoriteCostumerSupplierScalarWhereWithAggregatesInput>
    OR?: Enumerable<FavoriteCostumerSupplierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FavoriteCostumerSupplierScalarWhereWithAggregatesInput>
    CostumerId?: StringWithAggregatesFilter | string
    SupplierId?: StringWithAggregatesFilter | string
  }

  export type CategoryCreateInput = {
    Id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    Id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    suppliers?: SupplierUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    suppliers?: SupplierUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    Id: string
    name: string
    contact: number
    email?: string | null
    eccomerce?: string | null
    instragramUrl?: string | null
    rate?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSuppliersInput
    favoriteSuppliers?: FavoriteCostumerSupplierCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    Id: string
    name: string
    contact: number
    email?: string | null
    eccomerce?: string | null
    instragramUrl?: string | null
    rate?: number | null
    categoryId: string
    createAt?: Date | string
    updatedAt?: Date | string
    favoriteSuppliers?: FavoriteCostumerSupplierUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSuppliersNestedInput
    favoriteSuppliers?: FavoriteCostumerSupplierUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSuppliers?: FavoriteCostumerSupplierUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumerCreateInput = {
    Id: string
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    paymentStatus: string
    paymentDate: Date | string
    paymentdueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FavoriteSuppliers?: FavoriteCostumerSupplierCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUncheckedCreateInput = {
    Id: string
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    paymentStatus: string
    paymentDate: Date | string
    paymentdueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    FavoriteSuppliers?: FavoriteCostumerSupplierUncheckedCreateNestedManyWithoutCostumerInput
  }

  export type CostumerUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FavoriteSuppliers?: FavoriteCostumerSupplierUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FavoriteSuppliers?: FavoriteCostumerSupplierUncheckedUpdateManyWithoutCostumerNestedInput
  }

  export type CostumerUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumerUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCostumerSupplierCreateInput = {
    Costumer: CostumerCreateNestedOneWithoutFavoriteSuppliersInput
    Supplier: SupplierCreateNestedOneWithoutFavoriteSuppliersInput
  }

  export type FavoriteCostumerSupplierUncheckedCreateInput = {
    CostumerId: string
    SupplierId: string
  }

  export type FavoriteCostumerSupplierUpdateInput = {
    Costumer?: CostumerUpdateOneRequiredWithoutFavoriteSuppliersNestedInput
    Supplier?: SupplierUpdateOneRequiredWithoutFavoriteSuppliersNestedInput
  }

  export type FavoriteCostumerSupplierUncheckedUpdateInput = {
    CostumerId?: StringFieldUpdateOperationsInput | string
    SupplierId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCostumerSupplierUpdateManyMutationInput = {

  }

  export type FavoriteCostumerSupplierUncheckedUpdateManyInput = {
    CostumerId?: StringFieldUpdateOperationsInput | string
    SupplierId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SupplierListRelationFilter = {
    every?: SupplierWhereInput
    some?: SupplierWhereInput
    none?: SupplierWhereInput
  }

  export type SupplierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type FavoriteCostumerSupplierListRelationFilter = {
    every?: FavoriteCostumerSupplierWhereInput
    some?: FavoriteCostumerSupplierWhereInput
    none?: FavoriteCostumerSupplierWhereInput
  }

  export type FavoriteCostumerSupplierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    eccomerce?: SortOrder
    instragramUrl?: SortOrder
    rate?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    contact?: SortOrder
    rate?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    eccomerce?: SortOrder
    instragramUrl?: SortOrder
    rate?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    eccomerce?: SortOrder
    instragramUrl?: SortOrder
    rate?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    contact?: SortOrder
    rate?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CostumerCountOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    paymentdueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostumerMaxOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    paymentdueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CostumerMinOrderByAggregateInput = {
    Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    paymentStatus?: SortOrder
    paymentDate?: SortOrder
    paymentdueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type CostumerRelationFilter = {
    is?: CostumerWhereInput
    isNot?: CostumerWhereInput
  }

  export type SupplierRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type FavoriteCostumerSupplierCostumerIdSupplierIdCompoundUniqueInput = {
    CostumerId: string
    SupplierId: string
  }

  export type FavoriteCostumerSupplierCountOrderByAggregateInput = {
    CostumerId?: SortOrder
    SupplierId?: SortOrder
  }

  export type FavoriteCostumerSupplierMaxOrderByAggregateInput = {
    CostumerId?: SortOrder
    SupplierId?: SortOrder
  }

  export type FavoriteCostumerSupplierMinOrderByAggregateInput = {
    CostumerId?: SortOrder
    SupplierId?: SortOrder
  }

  export type SupplierCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutCategoryInput>, Enumerable<SupplierUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutCategoryInput>
    connect?: Enumerable<SupplierWhereUniqueInput>
  }

  export type SupplierUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutCategoryInput>, Enumerable<SupplierUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutCategoryInput>
    connect?: Enumerable<SupplierWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SupplierUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutCategoryInput>, Enumerable<SupplierUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<SupplierUpsertWithWhereUniqueWithoutCategoryInput>
    set?: Enumerable<SupplierWhereUniqueInput>
    disconnect?: Enumerable<SupplierWhereUniqueInput>
    delete?: Enumerable<SupplierWhereUniqueInput>
    connect?: Enumerable<SupplierWhereUniqueInput>
    update?: Enumerable<SupplierUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<SupplierUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<SupplierScalarWhereInput>
  }

  export type SupplierUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<SupplierCreateWithoutCategoryInput>, Enumerable<SupplierUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<SupplierCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<SupplierUpsertWithWhereUniqueWithoutCategoryInput>
    set?: Enumerable<SupplierWhereUniqueInput>
    disconnect?: Enumerable<SupplierWhereUniqueInput>
    delete?: Enumerable<SupplierWhereUniqueInput>
    connect?: Enumerable<SupplierWhereUniqueInput>
    update?: Enumerable<SupplierUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<SupplierUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<SupplierScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutSuppliersInput = {
    create?: XOR<CategoryCreateWithoutSuppliersInput, CategoryUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSuppliersInput
    connect?: CategoryWhereUniqueInput
  }

  export type FavoriteCostumerSupplierCreateNestedManyWithoutSupplierInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutSupplierInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutSupplierInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
  }

  export type FavoriteCostumerSupplierUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutSupplierInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutSupplierInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: XOR<CategoryCreateWithoutSuppliersInput, CategoryUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSuppliersInput
    upsert?: CategoryUpsertWithoutSuppliersInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutSuppliersInput, CategoryUncheckedUpdateWithoutSuppliersInput>
  }

  export type FavoriteCostumerSupplierUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutSupplierInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutSupplierInput>
    upsert?: Enumerable<FavoriteCostumerSupplierUpsertWithWhereUniqueWithoutSupplierInput>
    set?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    disconnect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    delete?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    update?: Enumerable<FavoriteCostumerSupplierUpdateWithWhereUniqueWithoutSupplierInput>
    updateMany?: Enumerable<FavoriteCostumerSupplierUpdateManyWithWhereWithoutSupplierInput>
    deleteMany?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
  }

  export type FavoriteCostumerSupplierUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutSupplierInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutSupplierInput>
    upsert?: Enumerable<FavoriteCostumerSupplierUpsertWithWhereUniqueWithoutSupplierInput>
    set?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    disconnect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    delete?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    update?: Enumerable<FavoriteCostumerSupplierUpdateWithWhereUniqueWithoutSupplierInput>
    updateMany?: Enumerable<FavoriteCostumerSupplierUpdateManyWithWhereWithoutSupplierInput>
    deleteMany?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
  }

  export type FavoriteCostumerSupplierCreateNestedManyWithoutCostumerInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutCostumerInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutCostumerInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
  }

  export type FavoriteCostumerSupplierUncheckedCreateNestedManyWithoutCostumerInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutCostumerInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutCostumerInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FavoriteCostumerSupplierUpdateManyWithoutCostumerNestedInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutCostumerInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutCostumerInput>
    upsert?: Enumerable<FavoriteCostumerSupplierUpsertWithWhereUniqueWithoutCostumerInput>
    set?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    disconnect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    delete?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    update?: Enumerable<FavoriteCostumerSupplierUpdateWithWhereUniqueWithoutCostumerInput>
    updateMany?: Enumerable<FavoriteCostumerSupplierUpdateManyWithWhereWithoutCostumerInput>
    deleteMany?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
  }

  export type FavoriteCostumerSupplierUncheckedUpdateManyWithoutCostumerNestedInput = {
    create?: XOR<Enumerable<FavoriteCostumerSupplierCreateWithoutCostumerInput>, Enumerable<FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput>>
    connectOrCreate?: Enumerable<FavoriteCostumerSupplierCreateOrConnectWithoutCostumerInput>
    upsert?: Enumerable<FavoriteCostumerSupplierUpsertWithWhereUniqueWithoutCostumerInput>
    set?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    disconnect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    delete?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    connect?: Enumerable<FavoriteCostumerSupplierWhereUniqueInput>
    update?: Enumerable<FavoriteCostumerSupplierUpdateWithWhereUniqueWithoutCostumerInput>
    updateMany?: Enumerable<FavoriteCostumerSupplierUpdateManyWithWhereWithoutCostumerInput>
    deleteMany?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
  }

  export type CostumerCreateNestedOneWithoutFavoriteSuppliersInput = {
    create?: XOR<CostumerCreateWithoutFavoriteSuppliersInput, CostumerUncheckedCreateWithoutFavoriteSuppliersInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutFavoriteSuppliersInput
    connect?: CostumerWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutFavoriteSuppliersInput = {
    create?: XOR<SupplierCreateWithoutFavoriteSuppliersInput, SupplierUncheckedCreateWithoutFavoriteSuppliersInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutFavoriteSuppliersInput
    connect?: SupplierWhereUniqueInput
  }

  export type CostumerUpdateOneRequiredWithoutFavoriteSuppliersNestedInput = {
    create?: XOR<CostumerCreateWithoutFavoriteSuppliersInput, CostumerUncheckedCreateWithoutFavoriteSuppliersInput>
    connectOrCreate?: CostumerCreateOrConnectWithoutFavoriteSuppliersInput
    upsert?: CostumerUpsertWithoutFavoriteSuppliersInput
    connect?: CostumerWhereUniqueInput
    update?: XOR<CostumerUpdateWithoutFavoriteSuppliersInput, CostumerUncheckedUpdateWithoutFavoriteSuppliersInput>
  }

  export type SupplierUpdateOneRequiredWithoutFavoriteSuppliersNestedInput = {
    create?: XOR<SupplierCreateWithoutFavoriteSuppliersInput, SupplierUncheckedCreateWithoutFavoriteSuppliersInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutFavoriteSuppliersInput
    upsert?: SupplierUpsertWithoutFavoriteSuppliersInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<SupplierUpdateWithoutFavoriteSuppliersInput, SupplierUncheckedUpdateWithoutFavoriteSuppliersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type SupplierCreateWithoutCategoryInput = {
    Id: string
    name: string
    contact: number
    email?: string | null
    eccomerce?: string | null
    instragramUrl?: string | null
    rate?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
    favoriteSuppliers?: FavoriteCostumerSupplierCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutCategoryInput = {
    Id: string
    name: string
    contact: number
    email?: string | null
    eccomerce?: string | null
    instragramUrl?: string | null
    rate?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
    favoriteSuppliers?: FavoriteCostumerSupplierUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutCategoryInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutCategoryInput, SupplierUncheckedCreateWithoutCategoryInput>
  }

  export type SupplierUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SupplierWhereUniqueInput
    update: XOR<SupplierUpdateWithoutCategoryInput, SupplierUncheckedUpdateWithoutCategoryInput>
    create: XOR<SupplierCreateWithoutCategoryInput, SupplierUncheckedCreateWithoutCategoryInput>
  }

  export type SupplierUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SupplierWhereUniqueInput
    data: XOR<SupplierUpdateWithoutCategoryInput, SupplierUncheckedUpdateWithoutCategoryInput>
  }

  export type SupplierUpdateManyWithWhereWithoutCategoryInput = {
    where: SupplierScalarWhereInput
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type SupplierScalarWhereInput = {
    AND?: Enumerable<SupplierScalarWhereInput>
    OR?: Enumerable<SupplierScalarWhereInput>
    NOT?: Enumerable<SupplierScalarWhereInput>
    Id?: StringFilter | string
    name?: StringFilter | string
    contact?: IntFilter | number
    email?: StringNullableFilter | string | null
    eccomerce?: StringNullableFilter | string | null
    instragramUrl?: StringNullableFilter | string | null
    rate?: IntNullableFilter | number | null
    categoryId?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoryCreateWithoutSuppliersInput = {
    Id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSuppliersInput = {
    Id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSuppliersInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSuppliersInput, CategoryUncheckedCreateWithoutSuppliersInput>
  }

  export type FavoriteCostumerSupplierCreateWithoutSupplierInput = {
    Costumer: CostumerCreateNestedOneWithoutFavoriteSuppliersInput
  }

  export type FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput = {
    CostumerId: string
  }

  export type FavoriteCostumerSupplierCreateOrConnectWithoutSupplierInput = {
    where: FavoriteCostumerSupplierWhereUniqueInput
    create: XOR<FavoriteCostumerSupplierCreateWithoutSupplierInput, FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput>
  }

  export type CategoryUpsertWithoutSuppliersInput = {
    update: XOR<CategoryUpdateWithoutSuppliersInput, CategoryUncheckedUpdateWithoutSuppliersInput>
    create: XOR<CategoryCreateWithoutSuppliersInput, CategoryUncheckedCreateWithoutSuppliersInput>
  }

  export type CategoryUpdateWithoutSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCostumerSupplierUpsertWithWhereUniqueWithoutSupplierInput = {
    where: FavoriteCostumerSupplierWhereUniqueInput
    update: XOR<FavoriteCostumerSupplierUpdateWithoutSupplierInput, FavoriteCostumerSupplierUncheckedUpdateWithoutSupplierInput>
    create: XOR<FavoriteCostumerSupplierCreateWithoutSupplierInput, FavoriteCostumerSupplierUncheckedCreateWithoutSupplierInput>
  }

  export type FavoriteCostumerSupplierUpdateWithWhereUniqueWithoutSupplierInput = {
    where: FavoriteCostumerSupplierWhereUniqueInput
    data: XOR<FavoriteCostumerSupplierUpdateWithoutSupplierInput, FavoriteCostumerSupplierUncheckedUpdateWithoutSupplierInput>
  }

  export type FavoriteCostumerSupplierUpdateManyWithWhereWithoutSupplierInput = {
    where: FavoriteCostumerSupplierScalarWhereInput
    data: XOR<FavoriteCostumerSupplierUpdateManyMutationInput, FavoriteCostumerSupplierUncheckedUpdateManyWithoutFavoriteSuppliersInput>
  }

  export type FavoriteCostumerSupplierScalarWhereInput = {
    AND?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
    OR?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
    NOT?: Enumerable<FavoriteCostumerSupplierScalarWhereInput>
    CostumerId?: StringFilter | string
    SupplierId?: StringFilter | string
  }

  export type FavoriteCostumerSupplierCreateWithoutCostumerInput = {
    Supplier: SupplierCreateNestedOneWithoutFavoriteSuppliersInput
  }

  export type FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput = {
    SupplierId: string
  }

  export type FavoriteCostumerSupplierCreateOrConnectWithoutCostumerInput = {
    where: FavoriteCostumerSupplierWhereUniqueInput
    create: XOR<FavoriteCostumerSupplierCreateWithoutCostumerInput, FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput>
  }

  export type FavoriteCostumerSupplierUpsertWithWhereUniqueWithoutCostumerInput = {
    where: FavoriteCostumerSupplierWhereUniqueInput
    update: XOR<FavoriteCostumerSupplierUpdateWithoutCostumerInput, FavoriteCostumerSupplierUncheckedUpdateWithoutCostumerInput>
    create: XOR<FavoriteCostumerSupplierCreateWithoutCostumerInput, FavoriteCostumerSupplierUncheckedCreateWithoutCostumerInput>
  }

  export type FavoriteCostumerSupplierUpdateWithWhereUniqueWithoutCostumerInput = {
    where: FavoriteCostumerSupplierWhereUniqueInput
    data: XOR<FavoriteCostumerSupplierUpdateWithoutCostumerInput, FavoriteCostumerSupplierUncheckedUpdateWithoutCostumerInput>
  }

  export type FavoriteCostumerSupplierUpdateManyWithWhereWithoutCostumerInput = {
    where: FavoriteCostumerSupplierScalarWhereInput
    data: XOR<FavoriteCostumerSupplierUpdateManyMutationInput, FavoriteCostumerSupplierUncheckedUpdateManyWithoutFavoriteSuppliersInput>
  }

  export type CostumerCreateWithoutFavoriteSuppliersInput = {
    Id: string
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    paymentStatus: string
    paymentDate: Date | string
    paymentdueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CostumerUncheckedCreateWithoutFavoriteSuppliersInput = {
    Id: string
    name: string
    email: string
    phoneNumber?: string | null
    password: string
    paymentStatus: string
    paymentDate: Date | string
    paymentdueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CostumerCreateOrConnectWithoutFavoriteSuppliersInput = {
    where: CostumerWhereUniqueInput
    create: XOR<CostumerCreateWithoutFavoriteSuppliersInput, CostumerUncheckedCreateWithoutFavoriteSuppliersInput>
  }

  export type SupplierCreateWithoutFavoriteSuppliersInput = {
    Id: string
    name: string
    contact: number
    email?: string | null
    eccomerce?: string | null
    instragramUrl?: string | null
    rate?: number | null
    createAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutSuppliersInput
  }

  export type SupplierUncheckedCreateWithoutFavoriteSuppliersInput = {
    Id: string
    name: string
    contact: number
    email?: string | null
    eccomerce?: string | null
    instragramUrl?: string | null
    rate?: number | null
    categoryId: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutFavoriteSuppliersInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutFavoriteSuppliersInput, SupplierUncheckedCreateWithoutFavoriteSuppliersInput>
  }

  export type CostumerUpsertWithoutFavoriteSuppliersInput = {
    update: XOR<CostumerUpdateWithoutFavoriteSuppliersInput, CostumerUncheckedUpdateWithoutFavoriteSuppliersInput>
    create: XOR<CostumerCreateWithoutFavoriteSuppliersInput, CostumerUncheckedCreateWithoutFavoriteSuppliersInput>
  }

  export type CostumerUpdateWithoutFavoriteSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CostumerUncheckedUpdateWithoutFavoriteSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpsertWithoutFavoriteSuppliersInput = {
    update: XOR<SupplierUpdateWithoutFavoriteSuppliersInput, SupplierUncheckedUpdateWithoutFavoriteSuppliersInput>
    create: XOR<SupplierCreateWithoutFavoriteSuppliersInput, SupplierUncheckedCreateWithoutFavoriteSuppliersInput>
  }

  export type SupplierUpdateWithoutFavoriteSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSuppliersNestedInput
  }

  export type SupplierUncheckedUpdateWithoutFavoriteSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpdateWithoutCategoryInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSuppliers?: FavoriteCostumerSupplierUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutCategoryInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteSuppliers?: FavoriteCostumerSupplierUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateManyWithoutSuppliersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contact?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    eccomerce?: NullableStringFieldUpdateOperationsInput | string | null
    instragramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCostumerSupplierUpdateWithoutSupplierInput = {
    Costumer?: CostumerUpdateOneRequiredWithoutFavoriteSuppliersNestedInput
  }

  export type FavoriteCostumerSupplierUncheckedUpdateWithoutSupplierInput = {
    CostumerId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCostumerSupplierUncheckedUpdateManyWithoutFavoriteSuppliersInput = {
    CostumerId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCostumerSupplierUpdateWithoutCostumerInput = {
    Supplier?: SupplierUpdateOneRequiredWithoutFavoriteSuppliersNestedInput
  }

  export type FavoriteCostumerSupplierUncheckedUpdateWithoutCostumerInput = {
    SupplierId?: StringFieldUpdateOperationsInput | string
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