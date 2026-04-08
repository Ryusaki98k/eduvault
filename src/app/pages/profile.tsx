import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { User, Camera, Save, X } from "lucide-react";
import { useState } from "react";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "ARTIT",
    lastName: "LANGPRASERT",
    studentId: "65412345678",
    email: "artit.lang@spu.ac.th",
    phone: "081-234-5678",
    department: "Information and Communication Technology",
    faculty: "Science and Technology",
    year: "3",
    bio: "นักศึกษาสาขาเทคโนโลยีสารสนเทศ ชั้นปีที่ 3",
  });

  const [editedData, setEditedData] = useState({ ...profileData });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...profileData });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editedData });
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
        <p className="text-sm text-gray-600">จัดการข้อมูลส่วนตัวของคุณ</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Profile Image Section */}
        <div className="col-span-4">
          <Card className="p-6">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-40 h-40 rounded-full bg-orange-400 flex items-center justify-center mx-auto overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-20 h-20 text-white" />
                  )}
                </div>
                {isEditing && (
                  <label
                    htmlFor="profile-upload"
                    className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    <Camera className="w-5 h-5" />
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <h2 className="text-xl font-bold mb-1">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Student ID: {profileData.studentId}
              </p>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs inline-block">
                Year {profileData.year}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Faculty</p>
                <p className="text-sm font-medium">{profileData.faculty}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Department</p>
                <p className="text-sm font-medium">{profileData.department}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Profile Information Section */}
        <div className="col-span-8">
          <Card className="p-0">
            <div className="bg-gray-200 px-6 py-3 border-b flex items-center justify-between">
              <h2 className="font-semibold">Personal Information</h2>
              {!isEditing ? (
                <Button onClick={handleEdit} size="sm">
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  {isEditing ? (
                    <Input
                      id="firstName"
                      value={editedData.firstName}
                      onChange={(e) =>
                        setEditedData({ ...editedData, firstName: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.firstName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  {isEditing ? (
                    <Input
                      id="lastName"
                      value={editedData.lastName}
                      onChange={(e) =>
                        setEditedData({ ...editedData, lastName: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.lastName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="studentId">Student ID</Label>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {profileData.studentId}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Student ID cannot be changed
                  </p>
                </div>

                <div>
                  <Label htmlFor="year">Year</Label>
                  {isEditing ? (
                    <Input
                      id="year"
                      value={editedData.year}
                      onChange={(e) =>
                        setEditedData({ ...editedData, year: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.year}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={editedData.email}
                      onChange={(e) =>
                        setEditedData({ ...editedData, email: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.email}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      type="tel"
                      value={editedData.phone}
                      onChange={(e) =>
                        setEditedData({ ...editedData, phone: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.phone}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <Label htmlFor="faculty">Faculty</Label>
                  {isEditing ? (
                    <Input
                      id="faculty"
                      value={editedData.faculty}
                      onChange={(e) =>
                        setEditedData({ ...editedData, faculty: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.faculty}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <Label htmlFor="department">Department</Label>
                  {isEditing ? (
                    <Input
                      id="department"
                      value={editedData.department}
                      onChange={(e) =>
                        setEditedData({
                          ...editedData,
                          department: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">
                      {profileData.department}
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={editedData.bio}
                      onChange={(e) =>
                        setEditedData({ ...editedData, bio: e.target.value })
                      }
                      className="mt-1"
                      rows={3}
                    />
                  ) : (
                    <p className="mt-1 text-sm font-medium">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Account Settings */}
          <Card className="p-0 mt-6">
            <div className="bg-gray-200 px-6 py-3 border-b">
              <h2 className="font-semibold">Account Settings</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Change Password</h3>
                  <p className="text-sm text-gray-600">
                    Update your password to keep your account secure
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Change Password
                </Button>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-600">
                      Receive notifications about course updates
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Privacy Settings</h3>
                    <p className="text-sm text-gray-600">
                      Control who can see your profile information
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage Privacy
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
