# UpdateMembers.py will update the Members_XXXX.json file to include the new members' information from
# Members_XXXX_form_responses.csv. The user/sysadmin will provide the Members_XXXX_form_responses.csv LOCALLY
# in the .gitignore folder and replace XXXX with the current (club) year to ensure NO personal information gets 
# pushed to the public git. Running THIS file will update the Members_XXXX.json appropriately which WILL get pushed.

#Imports
import csv
import json

# (Local) File directory prefix of the Members_XXXX.json and the Members_XXXX_form_responses.csv files 
PATH_PREFIX = "src/lib/"
ABOUT_US_IMG_PREFIX = "about-us-images/"

#These are the keys for the Members_XXXX_form_responses.csv questions
DISPLAY_NAME = "What is your preferred full name?"
FULL_NAME = "What's your full name?"
FUNNY_PIC = "Please upload your fun/silly profile image"
USER_BIO = "Put your bio below."
USER_TEAM = "What team are you a part of?"

#Defaults
PRIORITY_DEFAULT = 5



# Function: prepCurrentMembersJSON(year)
# --------------------------------------
# Reads the current Members_XXXX.json file where XXXX corresponds to the current year and checks the lead 
# status (see checkLeadStatus function). It then organizes the members list in alphabetical order (see sortMembersByName
# function). 
def prepCurrentMembersJSON(year):
    with open(PATH_PREFIX + "Members_" + str(year) +".json", mode = "r", encoding = "utf-8-sig", newline = "") as jsonRef:
        curMemList = json.load(jsonRef) #loads curMem as a list of dictionaries based on Members_XXXX.json's structure [{}, {}, {}, ...]
    checkLeadStatus(curMemList)
    return curMemList

# Function: checkLeadStatus(currentMembersList)
# ---------------------------------------------
# Reads in the current members list and assigns (or updates) the status to either current-lead, past-lead, or non-lead 
# given each member's "orgpriority" value.
# Returns the current members list with the "leadstatus" property and values assigned for each member
def checkLeadStatus(currentMembersList):
    for member in currentMembersList:
        if member["orgpriority"] == 2:
            member["leadstatus"] = "current-lead"
        elif member["orgpriority"] == 3:
            member["leadstatus"] = "past-lead"
        else: 
            member["leadstatus"] = "non-lead"
    return currentMembersList

# Open csv, parse first row for keys [form questions], ensure that each key-value pair is correct per row  
def prepCurrentMembersCSV(year):
    curMemCSVData = []
    with open(PATH_PREFIX + "Members_" + str(year) + "_form_responses.csv", mode = "r", encoding = "utf-8-sig", newline = "") as csvRef:
        curMemFormResponses = csv.DictReader(csvRef)
        for row in curMemFormResponses:
            curMemCSVData.append(row)
    
    #Can now navigate CSV data as [index of user] and ["Form Question"]
    return curMemCSVData

# curMemCSVData is an array of lists/dictionaries
def convCSVDataToJSON(curMemCSVData):
    curMemJSONFormat = []
    #need to get display name first
    for member in curMemCSVData:
        userData = {}

        #Name parsing
        #Need to grab the full first and last names for the image paths later
        rawFullName = member[FULL_NAME].strip()
        rawDisplayName = member[DISPLAY_NAME].strip()

        fullNameParts = rawFullName.split(" ", 1)
        fullFirstName = fullNameParts[0]
        fullLastName = fullNameParts[1] if len(fullNameParts) > 1 else ""

        displayNameParts = rawDisplayName.split(" ", 1)

        if len(displayNameParts) > 1:
            localLastName = displayNameParts[1]
        else:
            localLastName = fullLastName

        teamStr = member[USER_TEAM]
        userData["displayname"] = rawDisplayName if rawDisplayName.find(" ") != -1 else rawDisplayName + " "  + fullLastName
        userData["td"] = "TD" in teamStr
        userData["pw"] = "PW" in teamStr
        userData["t"] = "Tech" in teamStr

        #setting default values for new members....
        userData["org"] = True
        userData["orgpriority"] = PRIORITY_DEFAULT
        userData["tdpriority"] = PRIORITY_DEFAULT
        userData["pwpriority"] = PRIORITY_DEFAULT
        userData["tpriority"] = PRIORITY_DEFAULT

        #chooses the very last name as the path name. Skips middle names
        pathLastName = localLastName.split()[-1] if localLastName else ""

        #serious photo path has the underscore between first and last while silly doesn't. Silly has a space between. 
        #serious photo path has the underscore between first and last while silly doesn't. Silly has a space between. 
        pic1path = ABOUT_US_IMG_PREFIX + "serious/" + displayNameParts[0] + "_" + pathLastName + ".jpg"
        pic2path = ABOUT_US_IMG_PREFIX + "silly/" + displayNameParts[0] + " " + pathLastName + ".jpg"

        # Validate image paths and use default if not found
        userData["pic1path"] = validateImagePath(pic1path)
        userData["bio"] = member[USER_BIO].strip()
        userData["first"] = fullFirstName
        userData["last"] = localLastName
        userData["pic2path"] = validateImagePath(pic2path)

        curMemJSONFormat.append(userData)

    return curMemJSONFormat

# Function: sortMembersByName(currentMembersList)
# -----------------------------------------------
# Sorts the entire members list based on their last name. If two members have identical last names, it then compares their first. 
# Returns an alphabetically sorted members list
def sortMembersByName(currentMembersList):
    # The purpose of .lstrip() is to ignore any parantheses that may be present in the last name. This was an edge case encountered in the
    # current members list. Can otherwise be ignored functionally 
    currentMembersList.sort(key = lambda member: (member["last"].lower().lstrip("()"), member["first"].lower().lstrip("()")))
    return currentMembersList

# Function: mergeLists(currentMembersJSONList, newMembersJSON)
# ------------------------------------------------------------
# Takes the existing currentMembersJSONList as a parameter and the newMembersJSON (result of the convCSVDataToJSON function)
# and merges both lists. If a member is detected in currentMemebrsJSONList and newMembersJSON, we check the prior "orgpriority"
# property. If the member is a current-lead, keep all the [team]priority rankings the same, else, reset to PRIORITY_DEFAULT
def mergeLists(currentMembersJSONList, newMembersJson):
    mergedMap = {}

    for member in currentMembersJSONList:
        mergedMap[(member["first"].lower().strip(), member["last"].lower().strip())] = member

    for member in newMembersJson:
        memNameTuple = (member["first"].lower().strip(), member["last"].lower().strip())
        if memNameTuple not in mergedMap:
            mergedMap[memNameTuple] = member
        else:
            oldMemInfo = mergedMap[memNameTuple]
            newMemInfo = member.copy()
            newMemInfo["orgpriority"] = oldMemInfo.get("orgpriority", PRIORITY_DEFAULT)

            teams = ["tdpriority", "pwpriority", "tpriority"]
            for teamName in teams:
                oldVal = oldMemInfo.get(teamName, PRIORITY_DEFAULT)
                if oldVal != PRIORITY_DEFAULT:
                    newMemInfo[teamName] = oldVal
            mergedMap[memNameTuple] = newMemInfo

    return list(mergedMap.values())

# Function: removeDuplicates(membersList)
# -----------------------------------------
# Removes duplicate member entries based on display name.
# If duplicates exist, keeps the entry with orgpriority != PRIORITY_DEFAULT.
# If both have the same orgpriority status, keeps the first occurrence.
def removeDuplicates(membersList):
    seenMembers = {}
    duplicatesFound = []
    
    for member in membersList:
        # Create a key based on display name (case-insensitive, stripped)
        # This catches duplicates even if first name differs (e.g., "Kai" vs "Kiran")
        memKey = member["displayname"].lower().strip()
        
        if memKey not in seenMembers:
            # First time seeing this member, add them
            seenMembers[memKey] = member
        else:
            # Duplicate found - decide which to keep
            existingMember = seenMembers[memKey]
            currentMember = member
            
            existingOrgPriority = existingMember.get("orgpriority", PRIORITY_DEFAULT)
            currentOrgPriority = currentMember.get("orgpriority", PRIORITY_DEFAULT)
            
            duplicatesFound.append(f"Duplicate: {member['displayname']} (existing priority: {existingOrgPriority}, current priority: {currentOrgPriority})")
            
            # Keep the one with non-default orgpriority
            if existingOrgPriority == PRIORITY_DEFAULT and currentOrgPriority != PRIORITY_DEFAULT:
                seenMembers[memKey] = currentMember
                print(f"  -> Keeping current entry with priority {currentOrgPriority}")
            else:
                print(f"  -> Keeping existing entry with priority {existingOrgPriority}")
    
    if duplicatesFound:
        print("\n=== DUPLICATES FOUND ===")
        for dup in duplicatesFound:
            print(dup)
        print(f"Removed {len(duplicatesFound)} duplicate(s)\n")
    
    return list(seenMembers.values())

# Function: findDuplicatesByDisplayName(membersList)
# --------------------------------------------------
# Diagnostic function to find members with the same display name but different first/last values
def findDuplicatesByDisplayName(membersList):
    displayNameMap = {}
    
    for member in membersList:
        displayName = member["displayname"].lower().strip()
        if displayName not in displayNameMap:
            displayNameMap[displayName] = []
        displayNameMap[displayName].append(member)
    
    print("\n=== CHECKING FOR DISPLAY NAME DUPLICATES ===")
    duplicatesFound = False
    for displayName, members in displayNameMap.items():
        if len(members) > 1:
            duplicatesFound = True
            print(f"\nFound {len(members)} entries for: {displayName}")
            for i, member in enumerate(members):
                print(f"  Entry {i+1}:")
                print(f"    first: '{member['first']}'")
                print(f"    last: '{member['last']}'")
                print(f"    orgpriority: {member.get('orgpriority', 'N/A')}")
                print(f"    bio preview: {member.get('bio', '')[:50]}...")
    
    if not duplicatesFound:
        print("No display name duplicates found.")
    print("="*50 + "\n")

def validateImagePath(imagePath, defaultImage="SMT_red.png"):
    import os
    
    # This script is at: SMT-Website/src/routes/our-team/UpdateMembers.py
    # We need to go up 3 levels to reach SMT-Website/
    scriptDir = os.path.dirname(os.path.abspath(__file__))
    projectRoot = os.path.abspath(os.path.join(scriptDir, "..", "..", ".."))
    
    # Now build path to static: SMT-Website/static/about-us-images/...
    fullPath = os.path.join(projectRoot, "static", imagePath)
    
    # Check if the exact path exists
    if os.path.exists(fullPath):
        return imagePath
    
    # If not found, try alternate extensions (.jpg, .png, .jpeg, .JPG, .PNG, .JPEG)
    # Get the base path without extension
    basePathNoExt = os.path.splitext(imagePath)[0]
    fullBaseNoExt = os.path.join(projectRoot, "static", basePathNoExt)
    
    # Try common image extensions
    extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']
    for ext in extensions:
        testPath = fullBaseNoExt + ext
        if os.path.exists(testPath):
            # Return the relative path with the found extension
            return basePathNoExt + ext
    
    # If still not found, use default
    if imagePath != defaultImage:
        print(f"  Warning: Image not found at {imagePath} (tried multiple extensions), using default")
    return defaultImage
# Function: validateAllImages(membersList)
# ----------------------------------------
# Validates all image paths for existing members and replaces missing ones with default
# Function: refreshAllImagePaths(membersList)
# -------------------------------------------
# Reconstructs and validates image paths for all members every time script runs.
# This catches newly added images or removed images.
def refreshAllImagePaths(membersList):
    """
    Reconstructs and validates image paths for all members.
    This ensures paths are updated even if images were added after initial JSON creation.
    """
    print("\n" + "="*60)
    print("REFRESHING ALL IMAGE PATHS")
    print("="*60)
    
    updatedCount = 0
    foundPic1Count = 0
    foundPic2Count = 0
    
    for member in membersList:
        # Get name components
        firstName = member.get("first", "").strip()
        lastName = member.get("last", "").strip()
        displayName = member.get("displayname", "").strip()
        
        if not firstName or not lastName:
            print(f"  ⚠ Warning: Missing name for member, skipping path refresh")
            continue
        
        # Parse display name to get preferred first name
        displayNameParts = displayName.split(" ", 1)
        preferredFirstName = displayNameParts[0] if displayNameParts else firstName
        
        # Use last word of last name (handles middle names)
        pathLastName = lastName.split()[-1] if lastName else ""
        
        # Construct expected paths (matching your existing convention)
        expectedPic1 = ABOUT_US_IMG_PREFIX + "serious/" + preferredFirstName + "_" + pathLastName + ".jpg"
        expectedPic2 = ABOUT_US_IMG_PREFIX + "silly/" + preferredFirstName + " " + pathLastName + ".jpg"
        
        # Store old paths for comparison
        oldPic1 = member.get("pic1path", "")
        oldPic2 = member.get("pic2path", "")
        
        # Validate and update
        member["pic1path"] = validateImagePath(expectedPic1)
        member["pic2path"] = validateImagePath(expectedPic2)
        
        # Track statistics
        if member["pic1path"] != "SMT_red.png":
            foundPic1Count += 1
        if member["pic2path"] != "SMT_red.png":
            foundPic2Count += 1
            
        # Report changes
        if oldPic1 != member["pic1path"] or oldPic2 != member["pic2path"]:
            updatedCount += 1
            print(f"\n  📝 Updated: {displayName}")
            if oldPic1 != member["pic1path"]:
                print(f"     pic1: {oldPic1} → {member['pic1path']}")
            if oldPic2 != member["pic2path"]:
                print(f"     pic2: {oldPic2} → {member['pic2path']}")
    
    print("\n" + "="*60)
    print(f"✓ Refreshed paths for {len(membersList)} members")
    print(f"  - {updatedCount} member(s) had path changes")
    print(f"  - {foundPic1Count}/{len(membersList)} have serious photos")
    print(f"  - {foundPic2Count}/{len(membersList)} have silly photos")
    print("="*60 + "\n")
    
    return membersList
#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Actual Runtime 

# Change target year to match the most current year
TARGET_YEAR = 2026

print("="*60)
print(f"SMT MEMBERS UPDATE SCRIPT - {TARGET_YEAR}")
print("="*60)

print("\n Loading existing members...")
existingMembers = prepCurrentMembersJSON(TARGET_YEAR)
print(f"   Loaded {len(existingMembers)} members from JSON")

# Run diagnostic to find display name duplicates
findDuplicatesByDisplayName(existingMembers)

print("\n Cleaning duplicates from existing members...")
fixedExistingMembers = removeDuplicates(existingMembers)
print(f"   After cleanup: {len(fixedExistingMembers)} members")

print("\n Loading new members from CSV...")
newMembers = convCSVDataToJSON(prepCurrentMembersCSV(TARGET_YEAR))
print(f"   Loaded {len(newMembers)} members from CSV")

print("\n Merging lists...")
combinedMembers = mergeLists(fixedExistingMembers, newMembers)
print(f"   After merge: {len(combinedMembers)} members")

print("\n Final deduplication check...")
cleanedMembers = removeDuplicates(combinedMembers)
print(f"   After final cleanup: {len(cleanedMembers)} members")

# *** KEY ADDITION: Refresh all image paths ***
cleanedMembers = refreshAllImagePaths(cleanedMembers)

print("\n Sorting members alphabetically...")
sortedMembers = sortMembersByName(cleanedMembers)
finalMembersList = checkLeadStatus(sortedMembers)

print("\n Writing to file...")
targetFile = PATH_PREFIX + "Members_" + str(TARGET_YEAR) + ".json"
with open (targetFile, "w", encoding = "utf-8") as newCombinedMemListRef:
    json.dump(finalMembersList, newCombinedMemListRef, indent=4, ensure_ascii=False)

print("\n" + "="*60)
print(f" FINISHED! There are now {len(finalMembersList)} members in SMT {TARGET_YEAR}!")
print("="*60 + "\n")