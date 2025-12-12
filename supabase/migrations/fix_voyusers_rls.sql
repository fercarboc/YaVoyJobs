-- Fix VoyUsers RLS policies to allow user registration with company_sector

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can insert their own profile" ON "VoyUsers";
DROP POLICY IF EXISTS "Users can read their own profile" ON "VoyUsers";
DROP POLICY IF EXISTS "Users can update their own profile" ON "VoyUsers";

-- Create policy to allow users to insert their own profile during registration
CREATE POLICY "Users can insert their own profile" 
ON "VoyUsers" 
FOR INSERT 
WITH CHECK (auth.uid() = auth_user_id);

-- Create policy to allow users to read their own profile
CREATE POLICY "Users can read their own profile" 
ON "VoyUsers" 
FOR SELECT 
USING (auth.uid() = auth_user_id);

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update their own profile" 
ON "VoyUsers" 
FOR UPDATE 
USING (auth.uid() = auth_user_id);

-- Grant necessary permissions
GRANT INSERT, SELECT, UPDATE ON "VoyUsers" TO authenticated;
GRANT SELECT ON "VoyUsers" TO anon;
