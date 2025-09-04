"use client";

import React, { useState } from "react";
import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { CodeComparison } from "@/components/magicui/code-comparison";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

// Define the structure for best practices examples
interface BestPracticeExample {
  id: string;
  title: string;
  beforeCode: string;
  afterCode: string;
  language: string;
  filename: string;
  description: string;
}


// Code examples with hardcoded TypeScript code (not internationalized as requested)
function getBestPracticesExamples(t: any): Record<string, BestPracticeExample> {
  return {
  "single-responsibility": {
    id: "single-responsibility",
    title: t('examples.single-responsibility.title'),
    description: t('examples.single-responsibility.description'),
    language: "typescript",
    filename: t('files.singleResponsibility'),
    beforeCode:
      `// ❌ Violates single responsibility principle\nclass UserService {\n  async createUser(userData: any) {\n    // Validation\n    if (!userData.email || !userData.password) {\n      throw new Error('Email and password are required');\n    }\n    \n    // Email sending\n    await this.sendWelcomeEmail(userData.email);\n    \n    // Database saving\n    const user = await db.users.create(userData);\n    \n    // Logging\n    console.log(\`User created: \${user.id}\`);\n    \n    return user;\n  }\n  \n  private async sendWelcomeEmail(email: string) {\n    // Email sending logic\n  }\n}`,
    afterCode:
      `// ✅ Follows single responsibility principle\nclass UserService {\n  constructor(\n    private validator: UserValidator, // [!code ++]\n    private emailService: EmailService, // [!code ++]\n    private userRepository: UserRepository, // [!code ++]\n    private logger: Logger // [!code ++]\n  ) {}\n\n  async createUser(userData: any): Promise<User> {\n    this.validator.validate(userData); // [!code focus]\n    \n    const user = await this.userRepository.create(userData); // [!code focus]\n    \n    await this.emailService.sendWelcomeEmail(user.email); // [!code focus]\n    this.logger.log(\`User created: \${user.id}\`); // [!code focus]\n    \n    return user;\n  }\n}\n\nclass UserValidator { // [!code ++]\n  validate(userData: any): void { // [!code ++]\n    if (!userData.email || !userData.password) { // [!code ++]\n      throw new Error('Email and password are required'); // [!code ++]\n    } // [!code ++]\n  } // [!code ++]\n} // [!code ++]`,
  },
  "open-closed": {
    id: "open-closed",
    title: t('examples.open-closed.title'),
    description: t('examples.open-closed.description'),
    language: "typescript",
    filename: t('files.openClosed'),
    beforeCode:
      `// ❌ Violates open/closed principle\nclass PaymentProcessor {\n  processPayment(amount: number, method: string) {\n    if (method === 'credit-card') {\n      return this.processCreditCard(amount);\n    } else if (method === 'paypal') {\n      return this.processPaypal(amount);\n    } else if (method === 'bank-transfer') {\n      return this.processBankTransfer(amount);\n    }\n    throw new Error('Unsupported payment method');\n  }\n  \n  private processCreditCard(amount: number) {\n    // Credit card logic\n  }\n  \n  private processPaypal(amount: number) {\n    // PayPal logic\n  }\n  \n  private processBankTransfer(amount: number) {\n    // Bank transfer logic\n  }\n}`,
    afterCode:
      `// ✅ Follows open/closed principle\ninterface PaymentMethod { // [!code ++]\n  process(amount: number): Promise<PaymentResult>; // [!code ++]\n} // [!code ++]\n\nclass CreditCardPayment implements PaymentMethod { // [!code ++]\n  async process(amount: number): Promise<PaymentResult> { // [!code ++]\n    // Credit card specific logic // [!code ++]\n    return { success: true, transactionId: 'cc_123' }; // [!code ++]\n  } // [!code ++]\n} // [!code ++]\n\nclass PaypalPayment implements PaymentMethod { // [!code ++]\n  async process(amount: number): Promise<PaymentResult> { // [!code ++]\n    // PayPal specific logic // [!code ++]\n    return { success: true, transactionId: 'pp_456' }; // [!code ++]\n  } // [!code ++]\n} // [!code ++]\n\nclass PaymentProcessor {\n  constructor(private paymentMethod: PaymentMethod) {} // [!code focus]\n  \n  async processPayment(amount: number): Promise<PaymentResult> { // [!code focus]\n    return await this.paymentMethod.process(amount); // [!code focus]\n  } // [!code focus]\n}`,
  },
  "dependency-inversion": {
    id: "dependency-inversion",
    title: t('examples.dependency-inversion.title'),
    description: t('examples.dependency-inversion.description'),
    language: "typescript",
    filename: t('files.dependencyInversion'),
    beforeCode:
      `// ❌ Violates dependency inversion principle\nimport { MySQLDatabase } from './MySQLDatabase';\nimport { EmailProvider } from './EmailProvider';\n\nclass OrderService {\n  private database: MySQLDatabase;\n  private emailProvider: EmailProvider;\n  \n  constructor() {\n    this.database = new MySQLDatabase(); // Direct dependency\n    this.emailProvider = new EmailProvider(); // Direct dependency\n  }\n  \n  async createOrder(orderData: any) {\n    const order = await this.database.save(orderData);\n    await this.emailProvider.sendConfirmation(order.customerEmail);\n    return order;\n  }\n}`,
    afterCode:
      `// ✅ Follows dependency inversion principle\ninterface Database { // [!code ++]\n  save(data: any): Promise<any>; // [!code ++]\n} // [!code ++]\n\ninterface NotificationService { // [!code ++]\n  sendConfirmation(email: string): Promise<void>; // [!code ++]\n} // [!code ++]\n\nclass OrderService {\n  constructor(\n    private database: Database, // Abstraction // [!code focus]\n    private notificationService: NotificationService // Abstraction // [!code focus]\n  ) {}\n  \n  async createOrder(orderData: any) {\n    const order = await this.database.save(orderData); // [!code focus]\n    await this.notificationService.sendConfirmation(order.customerEmail); // [!code focus]\n    return order;\n  }\n}\n\n// Concrete implementations // [!code ++]\nclass MySQLDatabase implements Database { // [!code ++]\n  async save(data: any): Promise<any> { // [!code ++]\n    // MySQL specific implementation // [!code ++]\n  } // [!code ++]\n} // [!code ++]\n\nclass EmailNotificationService implements NotificationService { // [!code ++]\n  async sendConfirmation(email: string): Promise<void> { // [!code ++]\n    // Email specific implementation // [!code ++]\n  } // [!code ++]\n} // [!code ++]`,
  },
  "meaningful-names": {
    id: "meaningful-names",
    title: t('examples.meaningful-names.title'),
    description: t('examples.meaningful-names.description'),
    language: "typescript",
    filename: t('files.meaningfulNames'),
    beforeCode:
      `// ❌ Non-descriptive names\nclass Calc {\n  private data: any[] = [];\n  \n  process(d: any): number {\n    let r = 0;\n    let t = 0;\n    \n    for (let i = 0; i < d.length; i++) {\n      if (d[i].type === 1) {\n        r += d[i].amt * d[i].qty;\n        t += d[i].amt * d[i].qty * 0.15;\n      }\n    }\n    \n    return r + t;\n  }\n  \n  validate(x: any): boolean {\n    return x && x.amt > 0 && x.qty > 0;\n  }\n}`,
    afterCode:
      `// ✅ Descriptive and meaningful names\nclass ProductPriceCalculator { // [!code ++]\n  private products: Product[] = []; // [!code ++]\n  \n  calculateTotalPrice(products: Product[]): number { // [!code ++]\n    let subtotal = 0; // [!code ++]\n    let taxes = 0; // [!code ++]\n    \n    for (const product of products) { // [!code ++]\n      if (product.isActive) { // [!code ++]\n        const itemTotal = product.price * product.quantity; // [!code ++]\n        subtotal += itemTotal; // [!code ++]\n        taxes += itemTotal * TAX_RATE; // [!code ++]\n      } // [!code ++]\n    } // [!code ++]\n    \n    return subtotal + taxes; // [!code ++]\n  } // [!code ++]\n  \n  isValidProduct(product: Product): boolean { // [!code ++]\n    return product && product.price > 0 && product.quantity > 0; // [!code ++]\n  } // [!code ++]\n} // [!code ++]\n\nconst TAX_RATE = 0.15; // [!code ++]\n\ninterface Product { // [!code ++]\n  price: number; // [!code ++]\n  quantity: number; // [!code ++]\n  isActive: boolean; // [!code ++]\n} // [!code ++]`,
  },
  "small-functions": {
    id: "small-functions",
    title: t('examples.small-functions.title'),
    description: t('examples.small-functions.description'),
    language: "typescript",
    filename: t('files.smallFunctions'),
    beforeCode:
      `// ❌ Large function doing too many things\nasync function registerUser(userData: any) {\n  // Validation\n  if (!userData.email || !userData.email.includes('@')) {\n    throw new Error('Invalid email');\n  }\n  if (!userData.password || userData.password.length < 8) {\n    throw new Error('Password too short');\n  }\n  if (!userData.name || userData.name.trim().length === 0) {\n    throw new Error('Name is required');\n  }\n  \n  // Hash password\n  const salt = await bcrypt.genSalt(10);\n  const hashedPassword = await bcrypt.hash(userData.password, salt);\n  \n  // Create user\n  const user = await db.users.create({\n    email: userData.email.toLowerCase(),\n    password: hashedPassword,\n    name: userData.name.trim(),\n    createdAt: new Date()\n  });\n  \n  // Send welcome email\n  const emailTemplate = \`Welcome \${user.name}! Thanks for joining us.\`;\n  await emailService.send(user.email, 'Welcome!', emailTemplate);\n  \n  // Log activity\n  await db.logs.create({\n    action: 'USER_REGISTERED',\n    userId: user.id,\n    timestamp: new Date()\n  });\n  \n  return user;\n}`,
    afterCode:
      `// ✅ Small functions with specific responsibilities\nasync function registerUser(userData: UserRegistrationData): Promise<User> {\n  await validateUserData(userData); // [!code focus]\n  \n  const hashedPassword = await hashPassword(userData.password); // [!code focus]\n  const user = await createUser(userData, hashedPassword); // [!code focus]\n  \n  await sendWelcomeEmail(user); // [!code focus]\n  await logUserRegistration(user.id); // [!code focus]\n  \n  return user;\n}\n\nasync function validateUserData(userData: UserRegistrationData): Promise<void> { // [!code ++]\n  validateEmail(userData.email); // [!code ++]\n  validatePassword(userData.password); // [!code ++]\n  validateName(userData.name); // [!code ++]\n} // [!code ++]\n\nfunction validateEmail(email: string): void { // [!code ++]\n  if (!email || !email.includes('@')) { // [!code ++]\n    throw new Error('Invalid email'); // [!code ++]\n  } // [!code ++]\n} // [!code ++]\n\nasync function hashPassword(password: string): Promise<string> { // [!code ++]\n  const salt = await bcrypt.genSalt(10); // [!code ++]\n  return bcrypt.hash(password, salt); // [!code ++]\n} // [!code ++]\n\nasync function createUser(userData: UserRegistrationData, hashedPassword: string): Promise<User> { // [!code ++]\n  return db.users.create({ // [!code ++]\n    email: userData.email.toLowerCase(), // [!code ++]\n    password: hashedPassword, // [!code ++]\n    name: userData.name.trim(), // [!code ++]\n    createdAt: new Date() // [!code ++]\n  }); // [!code ++]\n} // [!code ++]`,
  },
  "avoid-comments": {
    id: "avoid-comments",
    title: t('examples.avoid-comments.title'),
    description: t('examples.avoid-comments.description'),
    language: "typescript",
    filename: t('files.avoidComments'),
    beforeCode:
      `// ❌ Code requiring many comments to understand\nclass InventoryManager {\n  // Check if product is available\n  check(p: Product, q: number): boolean {\n    // Get current stock level\n    const s = this.getStock(p.id);\n    \n    // Check if we have enough inventory\n    // Also need to account for reserved items\n    const r = this.getReserved(p.id);\n    \n    // Available = stock - reserved\n    const a = s - r;\n    \n    // Return true if we have enough\n    return a >= q;\n  }\n  \n  // Update the inventory when order is placed\n  update(pid: number, qty: number) {\n    // Get current values\n    const current = this.inventory[pid];\n    \n    // Subtract the quantity\n    current.stock -= qty;\n    \n    // Add to reserved\n    current.reserved += qty;\n    \n    // Update timestamp\n    current.lastUpdated = Date.now();\n  }\n}`,
    afterCode:
      `// ✅ Self-documenting code without comments\nclass InventoryManager {\n  isProductAvailable(product: Product, requestedQuantity: number): boolean { // [!code ++]\n    const currentStock = this.getCurrentStock(product.id); // [!code ++]\n    const reservedQuantity = this.getReservedQuantity(product.id); // [!code ++]\n    const availableQuantity = currentStock - reservedQuantity; // [!code ++]\n    \n    return availableQuantity >= requestedQuantity; // [!code ++]\n  } // [!code ++]\n  \n  reserveProductForOrder(productId: number, quantity: number): void { // [!code ++]\n    const inventoryRecord = this.getInventoryRecord(productId); // [!code ++]\n    \n    inventoryRecord.decreaseStock(quantity); // [!code ++]\n    inventoryRecord.increaseReserved(quantity); // [!code ++]\n    inventoryRecord.updateTimestamp(); // [!code ++]\n  } // [!code ++]\n  \n  private getCurrentStock(productId: number): number { // [!code ++]\n    return this.inventory[productId]?.stock ?? 0; // [!code ++]\n  } // [!code ++]\n  \n  private getReservedQuantity(productId: number): number { // [!code ++]\n    return this.inventory[productId]?.reserved ?? 0; // [!code ++]\n  } // [!code ++]\n  \n  private getInventoryRecord(productId: number): InventoryRecord { // [!code ++]\n    return this.inventory[productId]; // [!code ++]\n  } // [!code ++]\n}`,
  },
  "input-validation": {
    id: "input-validation",
    title: t('examples.input-validation.title'),
    description: t('examples.input-validation.description'),
    language: "typescript",
    filename: t('files.inputValidation'),
    beforeCode:
      `// ❌ No input validation - vulnerable to attacks\nclass AuthController {\n  async login(req: any, res: any) {\n    const { email, password } = req.body;\n    \n    // Search user directly without validation\n    const user = await db.query(\n      \`SELECT * FROM users WHERE email = '\${email}'\`\n    );\n    \n    // Compare plain text password\n    if (user && user.password === password) {\n      // Create token without validation\n      const token = jwt.sign({ id: user.id }, 'secret');\n      \n      res.json({ token, user });\n    } else {\n      res.status(401).json({ error: 'Invalid credentials' });\n    }\n  }\n  \n  async updateProfile(req: any, res: any) {\n    const { name, bio } = req.body;\n    \n    // Update without sanitizing\n    await db.query(\n      \`UPDATE users SET name = '\${name}', bio = '\${bio}' WHERE id = \${req.user.id}\`\n    );\n    \n    res.json({ success: true });\n  }\n}`,
    afterCode:
      `// ✅ With proper validation and sanitization\nclass AuthController {\n  async login(req: Request, res: Response) { // [!code ++]\n    const { email, password } = this.validateLoginInput(req.body); // [!code ++]\n    \n    const user = await this.userRepository.findByEmail(email); // [!code ++]\n    \n    if (!user || !await this.passwordService.verify(password, user.hashedPassword)) { // [!code ++]\n      throw new UnauthorizedError('Invalid credentials'); // [!code ++]\n    } // [!code ++]\n    \n    const token = this.tokenService.generateSecureToken(user.id); // [!code ++]\n    \n    res.json({ // [!code ++]\n      token, // [!code ++]\n      user: this.sanitizeUserData(user) // [!code ++]\n    }); // [!code ++]\n  } // [!code ++]\n  \n  async updateProfile(req: Request, res: Response) { // [!code ++]\n    const userId = this.validateUserId(req.user.id); // [!code ++]\n    const { name, bio } = this.validateProfileInput(req.body); // [!code ++]\n    \n    const sanitizedData = { // [!code ++]\n      name: this.sanitizer.cleanString(name), // [!code ++]\n      bio: this.sanitizer.cleanString(bio) // [!code ++]\n    }; // [!code ++]\n    \n    await this.userRepository.updateProfile(userId, sanitizedData); // [!code ++]\n    \n    res.json({ success: true }); // [!code ++]\n  } // [!code ++]\n  \n  private validateLoginInput(body: any): LoginData { // [!code ++]\n    const schema = z.object({ // [!code ++]\n      email: z.string().email().max(255), // [!code ++]\n      password: z.string().min(8).max(128) // [!code ++]\n    }); // [!code ++]\n    \n    return schema.parse(body); // [!code ++]\n  } // [!code ++]\n}`,
  },
  "secure-secrets": {
    id: "secure-secrets",
    title: t('examples.secure-secrets.title'),
    description: t('examples.secure-secrets.description'),
    language: "typescript",
    filename: t('files.secureSecrets'),
    beforeCode:
      `// ❌ Hardcoded and exposed secrets\nclass DatabaseConfig {\n  private connectionString = "postgresql://admin:password123@localhost:5432/mydb";\n  \n  private jwtSecret = "my-super-secret-key";\n  \n  private apiKeys = {\n    stripe: "sk_live_abc123def456ghi789",\n    sendgrid: "SG.xyz789.abc123def456",\n    aws: "AKIAIOSFODNN7EXAMPLE"\n  };\n  \n  async connect() {\n    console.log("Connecting to:", this.connectionString);\n    return pg.connect(this.connectionString);\n  }\n  \n  generateToken(payload: any) {\n    return jwt.sign(payload, this.jwtSecret, { expiresIn: '24h' });\n  }\n  \n  async sendEmail(to: string, subject: string, body: string) {\n    const client = new SendGrid(this.apiKeys.sendgrid);\n    return client.send({ to, subject, body });\n  }\n}`,
    afterCode:
      `// ✅ Secure secrets management using environment variables\nclass DatabaseConfig {\n  private readonly connectionString: string; // [!code ++]\n  private readonly jwtSecret: string; // [!code ++]\n  private readonly apiKeys: ApiKeys; // [!code ++]\n  \n  constructor() { // [!code ++]\n    this.validateEnvironment(); // [!code ++]\n    \n    this.connectionString = this.buildConnectionString(); // [!code ++]\n    this.jwtSecret = this.getRequiredEnvVar('JWT_SECRET'); // [!code ++]\n    this.apiKeys = this.loadApiKeys(); // [!code ++]\n  } // [!code ++]\n  \n  async connect(): Promise<pg.Client> { // [!code ++]\n    return pg.connect(this.connectionString); // [!code ++]\n  } // [!code ++]\n  \n  generateToken(payload: any): string { // [!code ++]\n    if (!this.jwtSecret) { // [!code ++]\n      throw new Error('JWT secret not configured'); // [!code ++]\n    } // [!code ++]\n    \n    return jwt.sign(payload, this.jwtSecret, { expiresIn: '24h' }); // [!code ++]\n  } // [!code ++]\n  \n  private buildConnectionString(): string { // [!code ++]\n    const host = this.getRequiredEnvVar('DB_HOST'); // [!code ++]\n    const port = this.getRequiredEnvVar('DB_PORT'); // [!code ++]\n    const database = this.getRequiredEnvVar('DB_NAME'); // [!code ++]\n    const username = this.getRequiredEnvVar('DB_USER'); // [!code ++]\n    const password = this.getRequiredEnvVar('DB_PASSWORD'); // [!code ++]\n    \n    return \`postgresql://\${username}:\${password}@\${host}:\${port}/\${database}\`; // [!code ++]\n  } // [!code ++]\n  \n  private getRequiredEnvVar(name: string): string { // [!code ++]\n    const value = process.env[name]; // [!code ++]\n    if (!value) { // [!code ++]\n      throw new Error(\`Missing required environment variable: \${name}\`); // [!code ++]\n    } // [!code ++]\n    return value; // [!code ++]\n  } // [!code ++]\n}`,
  },
  "avoid-n-plus-1": {
    id: "avoid-n-plus-1",
    title: t('examples.avoid-n-plus-1.title'),
    description: t('examples.avoid-n-plus-1.description'),
    language: "typescript",
    filename: t('files.avoidNPlusOne'),
    beforeCode:
      `// ❌ N+1 problem: one query per post\nclass PostService {\n  async getPostsWithAuthors(): Promise<PostWithAuthor[]> {\n    const posts = await db.posts.findMany({\n      where: { published: true },\n      orderBy: { createdAt: 'desc' }\n    });\n    \n    // N+1 problem! One query per post\n    const postsWithAuthors = [];\n    for (const post of posts) {\n      const author = await db.users.findUnique({\n        where: { id: post.authorId },\n        select: { id: true, name: true, email: true }\n      });\n      \n      postsWithAuthors.push({\n        ...post,\n        author\n      });\n    }\n    \n    return postsWithAuthors;\n  }\n  \n  async getPostsWithComments(): Promise<PostWithComments[]> {\n    const posts = await db.posts.findMany();\n    \n    // Again N+1 for comments\n    for (const post of posts) {\n      post.comments = await db.comments.findMany({\n        where: { postId: post.id }\n      });\n    }\n    \n    return posts;\n  }\n}`,
    afterCode:
      `// ✅ Optimized queries with joins/includes\nclass PostService {\n  async getPostsWithAuthors(): Promise<PostWithAuthor[]> { // [!code ++]\n    return db.posts.findMany({ // [!code ++]\n      where: { published: true }, // [!code ++]\n      orderBy: { createdAt: 'desc' }, // [!code ++]\n      include: { // [!code focus]\n        author: { // [!code focus]\n          select: { // [!code focus]\n            id: true, // [!code focus]\n            name: true, // [!code focus]\n            email: true // [!code focus]\n          } // [!code focus]\n        } // [!code focus]\n      } // [!code focus]\n    }); // [!code ++]\n  } // [!code ++]\n  \n  async getPostsWithComments(): Promise<PostWithComments[]> { // [!code ++]\n    return db.posts.findMany({ // [!code ++]\n      include: { // [!code focus]\n        author: { // [!code focus]\n          select: { id: true, name: true } // [!code focus]\n        }, // [!code focus]\n        comments: { // [!code focus]\n          include: { // [!code focus]\n            author: { // [!code focus]\n              select: { id: true, name: true } // [!code focus]\n            } // [!code focus]\n          } // [!code focus]\n        } // [!code focus]\n      } // [!code focus]\n    }); // [!code ++]\n  } // [!code ++]\n  \n  async getPostsWithStats(): Promise<PostWithStats[]> { // [!code ++]\n    return db.posts.findMany({ // [!code ++]\n      include: { // [!code ++]\n        _count: { // [!code focus]\n          select: { // [!code focus]\n            comments: true, // [!code focus]\n            likes: true // [!code focus]\n          } // [!code focus]\n        } // [!code focus]\n      } // [!code ++]\n    }); // [!code ++]\n  } // [!code ++]\n}`,
  },
  "efficient-caching": {
    id: "efficient-caching",
    title: t('examples.efficient-caching.title'),
    description: t('examples.efficient-caching.description'),
    language: "typescript",
    filename: t('files.efficientCaching'),
    beforeCode:
      `// ❌ No cache - repeated expensive queries\nclass ProductService {\n  async getProduct(id: number): Promise<Product> {\n    // Always goes to database\n    const product = await db.products.findUnique({\n      where: { id },\n      include: {\n        category: true,\n        reviews: {\n          include: { user: true }\n        },\n        variants: true\n      }\n    });\n    \n    if (!product) {\n      throw new Error('Product not found');\n    }\n    \n    // Expensive calculation that repeats\n    const averageRating = product.reviews.reduce((sum, review) => \n      sum + review.rating, 0) / product.reviews.length;\n    \n    const totalStock = product.variants.reduce((sum, variant) => \n      sum + variant.stock, 0);\n    \n    return {\n      ...product,\n      averageRating,\n      totalStock,\n      isAvailable: totalStock > 0\n    };\n  }\n  \n  async getPopularProducts(): Promise<Product[]> {\n    // Heavy query without cache\n    return db.products.findMany({\n      where: { featured: true },\n      include: { reviews: true, category: true },\n      orderBy: { viewCount: 'desc' },\n      take: 10\n    });\n  }\n}`,
    afterCode:
      `// ✅ With intelligent and stratified caching\nclass ProductService {\n  constructor( // [!code ++]\n    private cache: CacheService, // [!code ++]\n    private db: DatabaseService // [!code ++]\n  ) {} // [!code ++]\n  \n  async getProduct(id: number): Promise<Product> { // [!code ++]\n    const cacheKey = \`product:\${id}\`; // [!code ++]\n    \n    let product = await this.cache.get<Product>(cacheKey); // [!code focus]\n    if (product) { // [!code focus]\n      return product; // [!code focus]\n    } // [!code focus]\n    \n    product = await this.fetchProductWithCalculations(id); // [!code ++]\n    \n    await this.cache.set(cacheKey, product, { // [!code focus]\n      ttl: 3600, // 1 hour // [!code focus]\n      tags: ['product', \`product-\${id}\`] // [!code focus]\n    }); // [!code focus]\n    \n    return product; // [!code ++]\n  } // [!code ++]\n  \n  async getPopularProducts(): Promise<Product[]> { // [!code ++]\n    const cacheKey = 'products:popular'; // [!code ++]\n    \n    let products = await this.cache.get<Product[]>(cacheKey); // [!code focus]\n    if (products) { // [!code focus]\n      return products; // [!code focus]\n    } // [!code focus]\n    \n    products = await this.db.products.findMany({ // [!code ++]\n      where: { featured: true }, // [!code ++]\n      include: { category: true }, // [!code ++]\n      orderBy: { viewCount: 'desc' }, // [!code ++]\n      take: 10 // [!code ++]\n    }); // [!code ++]\n    \n    await this.cache.set(cacheKey, products, { // [!code focus]\n      ttl: 1800, // 30 minutes // [!code focus]\n      tags: ['products', 'popular'] // [!code focus]\n    }); // [!code focus]\n    \n    return products; // [!code ++]\n  } // [!code ++]\n  \n  async invalidateProductCache(productId: number): Promise<void> { // [!code ++]\n    await this.cache.invalidateByTags([\`product-\${productId}\`, 'popular']); // [!code ++]\n  } // [!code ++]\n}`,
    },
  };
}

// Note: Code examples are now hardcoded in English

export function BestPracticesSection() {
  const t = useTranslations('BestPractices');
  const [selectedExample, setSelectedExample] = useState<string>("single-responsibility");

  const bestPracticesExamples = getBestPracticesExamples(t);

  const handleFileSelect = (fileId: string) => {
    setSelectedExample(fileId);
  };

  const currentExample = bestPracticesExamples[selectedExample];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background dot pattern */}
      <DotPattern
        className="opacity-20 text-muted-foreground/30"
        width={30}
        height={30}
        cx={1}
        cy={1}
        cr={1}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px]">
            {/* File Tree - Left side on desktop, top on mobile */}
            <div className="lg:col-span-3 order-1">
              <div className="bg-card border border-border rounded-lg p-4 h-full">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">📁</span>
                  {t('practices')}
                </h3>

                <Tree
                  className="w-full h-auto"
                  initialSelectedId={selectedExample}
                  initialExpandedItems={["solid", "clean-code", "security", "performance"]}
                  key={selectedExample}
                >
                  <Folder value="solid" element="SOLID">
                    <File
                      value="single-responsibility"
                      handleSelect={() => handleFileSelect("single-responsibility")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "single-responsibility" && "bg-muted"
                      )}
                    >
                      {t('files.singleResponsibility')}
                    </File>
                    <File
                      value="open-closed"
                      handleSelect={() => handleFileSelect("open-closed")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "open-closed" && "bg-muted"
                      )}
                    >
                      {t('files.openClosed')}
                    </File>
                    <File
                      value="dependency-inversion"
                      handleSelect={() => handleFileSelect("dependency-inversion")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "dependency-inversion" && "bg-muted"
                      )}
                    >
                      {t('files.dependencyInversion')}
                    </File>
                  </Folder>

                  <Folder value="clean-code" element="Clean Code">
                    <File
                      value="meaningful-names"
                      handleSelect={() => handleFileSelect("meaningful-names")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "meaningful-names" && "bg-muted"
                      )}
                    >
                      {t('files.meaningfulNames')}
                    </File>
                    <File
                      value="small-functions"
                      handleSelect={() => handleFileSelect("small-functions")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "small-functions" && "bg-muted"
                      )}
                    >
                      {t('files.smallFunctions')}
                    </File>
                    <File
                      value="avoid-comments"
                      handleSelect={() => handleFileSelect("avoid-comments")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "avoid-comments" && "bg-muted"
                      )}
                    >
                      {t('files.avoidComments')}
                    </File>
                  </Folder>

                  <Folder value="security" element="Security">
                    <File
                      value="input-validation"
                      handleSelect={() => handleFileSelect("input-validation")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "input-validation" && "bg-muted"
                      )}
                    >
                      {t('files.inputValidation')}
                    </File>
                    <File
                      value="secure-secrets"
                      handleSelect={() => handleFileSelect("secure-secrets")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "secure-secrets" && "bg-muted"
                      )}
                    >
                      {t('files.secureSecrets')}
                    </File>
                  </Folder>

                  <Folder value="performance" element="Performance">
                    <File
                      value="avoid-n-plus-1"
                      handleSelect={() => handleFileSelect("avoid-n-plus-1")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "avoid-n-plus-1" && "bg-muted"
                      )}
                    >
                      {t('files.avoidNPlusOne')}
                    </File>
                    <File
                      value="efficient-caching"
                      handleSelect={() => handleFileSelect("efficient-caching")}
                      className={cn(
                        "w-full justify-start p-2 hover:bg-muted/50 transition-colors",
                        selectedExample === "efficient-caching" && "bg-muted"
                      )}
                    >
                      {t('files.efficientCaching')}
                    </File>
                  </Folder>
                </Tree>
              </div>
            </div>

            {/* Code Comparison - Right side on desktop, bottom on mobile */}
            <div className="lg:col-span-9 order-2">
              <div className="h-full">
                {currentExample ? (
                  <div className="space-y-4">
                    <div className="text-center lg:text-left">
                      <h4 className="text-2xl font-semibold text-foreground mb-2">
                        {currentExample.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {currentExample.description}
                      </p>
                    </div>

                    <CodeComparison
                      beforeCode={currentExample.beforeCode}
                      afterCode={currentExample.afterCode}
                      language={currentExample.language}
                      filename={currentExample.filename}
                      lightTheme="github-light"
                      darkTheme="github-dark"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-muted/20 rounded-lg border border-border">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📝</div>
                      <p className="text-muted-foreground">
                        {t('selectFile')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}