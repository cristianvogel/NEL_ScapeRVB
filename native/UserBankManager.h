#ifndef VFS_USERBANKMANAGER_H
#define VFS_USERBANKMANAGER_H

namespace vfs
{

	class UserBankManager
	{
	public:
		UserBankManager() = default;
		~UserBankManager() = default;
		int getUserBank() const { return USERBANK; };
		int incrementUserBank()
		{
			USERBANK++;
			return USERBANK;
		};
		void resetUserBank() { USERBANK = 0; };

	private:
		int USERBANK = 0;
	};

} // namespace vfs

#endif // VFS_USERBANKMANAGER_H
