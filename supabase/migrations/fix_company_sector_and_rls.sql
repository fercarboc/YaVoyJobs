-- Fix company_sector column and RLS policies

-- Step 1: Change company_sector from ENUM to TEXT
ALTER TABLE "VoyUsers" 
ALTER COLUMN "company_sector" TYPE TEXT;

-- Step 2: Drop the old ENUM type if it exists
DROP TYPE IF EXISTS voy_company_sector CASCADE;

-- Step 3: Ensure RLS is enabled
ALTER TABLE "VoyUsers" ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop all existing policies
DROP POLICY IF EXISTS "Enable read access for all users" ON "VoyUsers";
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON "VoyUsers";
DROP POLICY IF EXISTS "Enable update for users based on user_id" ON "VoyUsers";
DROP POLICY IF EXISTS "Users can insert their own profile" ON "VoyUsers";
DROP POLICY IF EXISTS "Users can read their own profile" ON "VoyUsers";
DROP POLICY IF EXISTS "Users can update their own profile" ON "VoyUsers";

-- Step 5: Create new permissive policies
CREATE POLICY "Allow authenticated users to insert their profile" 
ON "VoyUsers" 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = auth_user_id);

CREATE POLICY "Allow users to read their own profile" 
ON "VoyUsers" 
FOR SELECT 
TO authenticated
USING (auth.uid() = auth_user_id);

CREATE POLICY "Allow users to update their own profile" 
ON "VoyUsers" 
FOR UPDATE 
TO authenticated
USING (auth.uid() = auth_user_id)
WITH CHECK (auth.uid() = auth_user_id);

-- Step 6: Allow anon to read for public profiles (optional, can be removed if not needed)
CREATE POLICY "Allow public read for specific fields" 
ON "VoyUsers" 
FOR SELECT 
TO anon
USING (true);

-- Step 7: Ensure proper grants
GRANT INSERT, SELECT, UPDATE ON "VoyUsers" TO authenticated;
GRANT SELECT ON "VoyUsers" TO anon;

-- Step 8: Update existing values
UPDATE "VoyUsers" 
SET company_sector = 'hosteleria-eventos'
WHERE company_sector = 'HOSTELERIA_RESTAURACION';
